import { isCollapsed } from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  isElement,
  SPEditor,
  TElement,
  WithOverride,
} from '@udecode/slate-plugins-core';
import { Editor, Node, Point, Transforms } from 'slate';
import { ELEMENT_ACCORDION, ELEMENT_ACCORDION_CONTENT } from './defaults';

export const withAccordions = (): WithOverride<SPEditor> => (editor) => {
  const matchAccordions = (node: Node) => {
    return (
      isElement(node) &&
      (node.type === getSlatePluginType(editor, ELEMENT_ACCORDION) ||
        node.type === getSlatePluginType(editor, ELEMENT_ACCORDION_CONTENT))
    );
  };

  const { deleteBackward, deleteForward, deleteFragment } = editor;

  const preventDeleteAccordion = (
    operation: any,
    pointCallback: any,
    nextPoint: any
  ) => (unit: any) => {
    const { selection } = editor;

    if (isCollapsed(selection)) {
      const [accordion] = Editor.nodes<TElement>(editor, {
        match: matchAccordions,
      });
      if (accordion) {
        // Prevent deletions within an accordion
        const [, accordionPath] = accordion;
        const start = pointCallback(editor, accordionPath);

        if (selection && Point.equals(selection.anchor, start)) {
          return;
        }
      } else {
        // Prevent deleting cell when selection is before or after accordion
        const next = nextPoint(editor, selection, { unit });
        const [nextAccordion] = Editor.nodes(editor, {
          match: matchAccordions,
          at: next,
        });
        if (nextAccordion) return;
      }
    }

    operation(unit);
  };

  editor.deleteFragment = () => {
    const { selection } = editor;
    const [start] = Editor.nodes(editor, {
      match: matchAccordions,
      at: selection?.anchor.path,
    });
    const [end] = Editor.nodes(editor, {
      match: matchAccordions,
      at: selection?.focus.path,
    });
    // Skip deletes if they start or end in an accordion, unless start & end in the same accordion
    if ((start || end) && start?.[0] !== end?.[0]) {
      // Clear accordion content
      const accordions = Editor.nodes(editor, {
        match: matchAccordions,
      });
      for (const [, path] of accordions) {
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

  // prevent deleting accordions with deleteBackward
  editor.deleteBackward = preventDeleteAccordion(
    deleteBackward,
    Editor.start,
    Editor.before
  );

  // prevent deleting accordions with deleteForward
  editor.deleteForward = preventDeleteAccordion(
    deleteForward,
    Editor.end,
    Editor.after
  );

  return editor;
};
