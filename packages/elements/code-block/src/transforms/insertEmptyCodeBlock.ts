import {
  ELEMENT_DEFAULT,
  insertNodes,
  isBlockAboveEmpty,
  isExpanded,
} from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor, TElement } from '@insendi/editor-v2-core';
import { Editor, Path } from 'slate';
import { CodeBlockInsertOptions } from '../types';
import { insertCodeBlock } from './insertCodeBlock';

/**
 * Called by toolbars to make sure a code-block gets inserted below a paragraph
 * rather than awkwardly splitting the current selection.
 */
export const insertEmptyCodeBlock = (
  editor: SPEditor,
  {
    defaultType = getPlatePluginType(editor, ELEMENT_DEFAULT),
    insertNodesOptions,
    level = 0,
  }: CodeBlockInsertOptions
) => {
  if (!editor.selection) return;

  if (isExpanded(editor.selection) || !isBlockAboveEmpty(editor)) {
    const selectionPath = Editor.path(editor, editor.selection);
    const insertPath = Path.next(selectionPath.slice(0, level + 1));
    insertNodes<TElement>(
      editor,
      { type: defaultType, children: [{ text: '' }] },
      {
        at: insertPath,
        select: true,
      }
    );
  }
  insertCodeBlock(editor, insertNodesOptions);
};
