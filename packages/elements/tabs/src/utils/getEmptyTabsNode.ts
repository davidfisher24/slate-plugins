import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_TABS } from '../defaults';
import { getEmptyTabsContentNode } from './getEmptyTabsContentNode';
import { getEmptyTabsListNode } from './getEmptyTabsListNode';

export const getEmptyTabsNode = (editor: SPEditor) => {
  return {
    type: getPlatePluginType(editor, ELEMENT_TABS),
    children: [getEmptyTabsListNode(editor), getEmptyTabsContentNode(editor)],
  };
};
