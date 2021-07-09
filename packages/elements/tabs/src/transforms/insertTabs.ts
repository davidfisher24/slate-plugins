import { insertNodes, someNode } from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { ELEMENT_TABS } from '../defaults';
import { getEmptyTabsNode } from '../utils/getEmptyTabsNode';

export const insertTabs = (editor: SPEditor) => {
  if (
    !someNode(editor, {
      match: { type: getSlatePluginType(editor, ELEMENT_TABS) },
    })
  ) {
    insertNodes<TElement>(editor, getEmptyTabsNode(editor));
  }
};
