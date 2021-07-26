import { TEditor } from '@insendi/editor-v2-core';
import { Editor, Path, Transforms } from 'slate';
import { getBlockAbove } from '../queries';

/**
 * Select the end point of the block above the selection.
 */
export const selectEndOfBlockAboveSelection = (editor: TEditor) => {
  const path = getBlockAbove(editor)?.[1];

  path && Transforms.select(editor, Editor.end(editor, path as Path));
};
