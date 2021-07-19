import { isCollapsed } from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  isElement,
  SPEditor,
  TElement,
  WithOverride,
} from '@udecode/slate-plugins-core';
import { isEqual } from 'lodash';
import { Editor, Node, Point, Transforms } from 'slate';
import { ELEMENT_IFRAME } from './defaults';

export const withIframe = (): WithOverride<SPEditor> => (editor) => {
  const matchIframe = (node: Node) => {
    return (
      isElement(node) &&
      node.type === getSlatePluginType(editor, ELEMENT_IFRAME)
    )
  };

  const { deleteBackward, deleteForward, deleteFragment } = editor;

  const preventDeleteIframe = (
    operation: any,
    pointCallback: any,
    nextPoint: any
  ) => (unit: any) => {
    const { selection } = editor;

    if (isCollapsed(selection)) {
      const [iframe] = Editor.nodes<TElement>(editor, {
        match: matchIframe,
      });
      if (iframe) {
        // Prevent deletions within a iframe
        const [, iframePath] = iframe;
        const start = pointCallback(editor, iframePath);
        const { path } = start;
        if (selection && isEqual(selection.anchor.path,path)) {
          return;
        }
      } else {
        // Prevent deleting iframe when selection is before or after iframe
        const next = nextPoint(editor, selection, { unit });
        const [nextIframe] = Editor.nodes(editor, {
          match: matchIframe,
          at: next,
        });
        
        if (nextIframe) return;
      }
    }

    operation(unit);
  };

  editor.deleteFragment = () => {
    const { selection } = editor;
    const [start] = Editor.nodes(editor, {
      match: matchIframe,
      at: selection?.anchor.path,
    });
    const [end] = Editor.nodes(editor, {
      match: matchIframe,
      at: selection?.focus.path,
    });
    // Skip deletes if they start or end in a iframe, unless start & end in the iframe
    if ((start || end) && start?.[0] !== end?.[0]) {
      // Clear tab content
      const iframes = Editor.nodes(editor, {
        match: matchIframe,
      });
      console.log(iframes)
      for (const [, path] of iframes) {
        for (const [, childPath] of Node.children(editor, path, {
          reverse: true,
        })) {
          Transforms.removeNodes(editor, { at: childPath });
        }
      }
      Transforms.collapse(editor);
      return;
    }
    deleteFragment();
  };

  // prevent deleting iframe with deleteBackward
  editor.deleteBackward = preventDeleteIframe(
    deleteBackward,
    Editor.start,
    Editor.before
  );

  // prevent deleting tabs with deleteForward
  editor.deleteForward = preventDeleteIframe(
    deleteForward,
    Editor.end,
    Editor.after
  );

  return editor;
};
