import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_TABS_LIST } from '../defaults';
import { getEmptyTabNode } from './getEmptyTabNode';

export const getEmptyTabsListNode = (editor: SPEditor) => {
  return {
    type: getPlatePluginType(editor, ELEMENT_TABS_LIST),
    children: [getEmptyTabNode(editor, { active: true })],
  };
};
