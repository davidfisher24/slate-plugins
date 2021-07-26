import {
  InsertNodesOptions,
  isExpanded,
  isSelectionAtBlockStart,
  setNodes,
  someNode,
  wrapNodes,
} from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor, TElement } from '@insendi/editor-v2-core';
import { ELEMENT_CODE_BLOCK, ELEMENT_CODE_LINE } from '../defaults';

/**
 * Insert a code block: set the node to code line and wrap it with a code block.
 * If the cursor is not at the block start, insert break before.
 */
export const insertCodeBlock = (
  editor: SPEditor,
  insertNodesOptions: Omit<InsertNodesOptions, 'match'> = {}
) => {
  if (!editor.selection || isExpanded(editor.selection)) return;

  const matchCodeElements = (node: TElement) =>
    node.type === getPlatePluginType(editor, ELEMENT_CODE_BLOCK) ||
    node.type === getPlatePluginType(editor, ELEMENT_CODE_LINE);

  if (
    someNode(editor, {
      match: matchCodeElements,
    })
  ) {
    return;
  }

  if (!isSelectionAtBlockStart(editor)) {
    editor.insertBreak();
  }

  setNodes<TElement>(
    editor,
    {
      type: getPlatePluginType(editor, ELEMENT_CODE_LINE),
      children: [{ text: '' }],
    },
    insertNodesOptions
  );

  wrapNodes(
    editor,
    {
      type: getPlatePluginType(editor, ELEMENT_CODE_BLOCK),
      children: [],
    },
    insertNodesOptions
  );
};
