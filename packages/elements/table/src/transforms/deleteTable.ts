import { getAbove, someNode } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { Transforms } from 'slate';
import { ELEMENT_TABLE } from '../defaults';

export const deleteTable = (editor: SPEditor) => {
  if (
    someNode(editor, {
      match: { type: getPlatePluginType(editor, ELEMENT_TABLE) },
    })
  ) {
    const tableItem = getAbove(editor, {
      match: { type: getPlatePluginType(editor, ELEMENT_TABLE) },
    });
    if (tableItem) {
      Transforms.removeNodes(editor, {
        at: tableItem[1],
      });
    }
  }
};
