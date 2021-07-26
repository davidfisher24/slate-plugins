import { EditorNodesOptions, getNodes } from '@insendi/editor-v2-common';
import { TEditor } from '@insendi/editor-v2-core';
import { Editor } from 'slate';

/**
 * Get blocks with an id
 */
export const getBlocksWithId = (
  editor: TEditor,
  options: EditorNodesOptions
) => {
  return [
    ...getNodes(editor, {
      match: (n) => Editor.isBlock(editor, n) && !!n.id,
      ...options,
    }),
  ];
};
