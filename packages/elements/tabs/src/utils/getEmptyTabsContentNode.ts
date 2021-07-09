import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_TABS_CONTENT } from '../defaults';
import { getEmptyTabContentNode } from './getEmptyTabContentNode';

export const getEmptyTabsContentNode = (editor: SPEditor) => {
  return {
    type: getSlatePluginType(editor, ELEMENT_TABS_CONTENT),
    children: [getEmptyTabContentNode(editor, { active: true })],
  };
};
