import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_TABS } from '../defaults';
import { getEmptyTabsContentNode } from './getEmptyTabsContentNode';
import { getEmptyTabsListNode } from './getEmptyTabsListNode';

export const getEmptyTabsNode = (editor: SPEditor) => {
  return {
    type: getSlatePluginType(editor, ELEMENT_TABS),
    children: [getEmptyTabsListNode(editor), getEmptyTabsContentNode(editor)],
  };
};
