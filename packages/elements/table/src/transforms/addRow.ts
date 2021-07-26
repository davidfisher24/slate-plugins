import { getAbove, insertNodes, someNode } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor, TElement } from '@insendi/editor-v2-core';
import { Path } from 'slate';
import { ELEMENT_TABLE, ELEMENT_TR } from '../defaults';
import { TablePluginOptions } from '../types';
import { getEmptyRowNode } from '../utils/getEmptyRowNode';

export const addRow = (editor: SPEditor, { header }: TablePluginOptions) => {
  if (
    someNode(editor, {
      match: { type: getPlatePluginType(editor, ELEMENT_TABLE) },
    })
  ) {
    const currentRowItem = getAbove(editor, {
      match: { type: getPlatePluginType(editor, ELEMENT_TR) },
    });
    if (currentRowItem) {
      const [currentRowElem, currentRowPath] = currentRowItem;
      insertNodes<TElement>(
        editor,
        getEmptyRowNode(editor, {
          header,
          colCount: currentRowElem.children.length,
        }),
        {
          at: Path.next(currentRowPath),
          select: true,
        }
      );
    }
  }
};
