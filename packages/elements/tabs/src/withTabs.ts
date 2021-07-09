import { isCollapsed } from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  isElement,
  SPEditor,
  TElement,
  WithOverride,
} from '@udecode/slate-plugins-core';
import { Editor, Node, Point, Transforms } from 'slate';
import { ELEMENT_TAB, ELEMENT_TAB_CONTENT } from './defaults';

export const withTabs = (): WithOverride<SPEditor> => (editor) => {
  const matchTabs = (node: Node) => {
    return (
      isElement(node) &&
      (node.type === getSlatePluginType(editor, ELEMENT_TAB) ||
        node.type === getSlatePluginType(editor, ELEMENT_TAB_CONTENT))
    );
  };

  const { deleteBackward, deleteForward, deleteFragment } = editor;

  const preventDeleteTab = (
    operation: any,
    pointCallback: any,
    nextPoint: any
  ) => (unit: any) => {
    const { selection } = editor;

    if (isCollapsed(selection)) {
      const [tab] = Editor.nodes<TElement>(editor, {
        match: matchTabs,
      });
      if (tab) {
        // Prevent deletions within a tab
        const [, tabPath] = tab;
        const start = pointCallback(editor, tabPath);

        if (selection && Point.equals(selection.anchor, start)) {
          return;
        }
      } else {
        // Prevent deleting cell when selection is before or after tabs
        const next = nextPoint(editor, selection, { unit });
        const [nextTab] = Editor.nodes(editor, {
          match: matchTabs,
          at: next,
        });
        if (nextTab) return;
      }
    }

    operation(unit);
  };

  editor.deleteFragment = () => {
    const { selection } = editor;
    const [start] = Editor.nodes(editor, {
      match: matchTabs,
      at: selection?.anchor.path,
    });
    const [end] = Editor.nodes(editor, {
      match: matchTabs,
      at: selection?.focus.path,
    });
    // Skip deletes if they start or end in a tab, unless start & end in the same tab
    if ((start || end) && start?.[0] !== end?.[0]) {
      // Clear tab content
      const tabs = Editor.nodes(editor, {
        match: matchTabs,
      });
      for (const [, path] of tabs) {
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

  // prevent deleting tabs with deleteBackward
  editor.deleteBackward = preventDeleteTab(
    deleteBackward,
    Editor.start,
    Editor.before
  );

  // prevent deleting tabs with deleteForward
  editor.deleteForward = preventDeleteTab(
    deleteForward,
    Editor.end,
    Editor.after
  );

  return editor;
};
