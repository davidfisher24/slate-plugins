import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_TABS_LIST } from '../defaults';
import { getEmptyTabNode } from './getEmptyTabNode';

export const getEmptyTabsListNode = (editor: SPEditor) => {
  return {
    type: getSlatePluginType(editor, ELEMENT_TABS_LIST),
    children: [getEmptyTabNode(editor, { active: true })],
  };
};
