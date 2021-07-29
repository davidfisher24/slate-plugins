import { insertNodes, someNode } from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  SPEditor,
  TElement,
} from '@insendi/editor-v2-core';
import { ELEMENT_TABS } from '../defaults';
import { getEmptyTabsNode } from '../utils/getEmptyTabsNode';

export const insertTabs = (editor: SPEditor) => {
  if (
    !someNode(editor, {
      match: { type: getPlatePluginType(editor, ELEMENT_TABS) },
    })
  ) {
    insertNodes<TElement>(editor, getEmptyTabsNode(editor));
  }
};
