import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_TABS_CONTENT } from '../defaults';
import { getEmptyTabContentNode } from './getEmptyTabContentNode';

export const getEmptyTabsContentNode = (editor: SPEditor) => {
  return {
    type: getPlatePluginType(editor, ELEMENT_TABS_CONTENT),
    children: [getEmptyTabContentNode(editor, { active: true })],
  };
};
