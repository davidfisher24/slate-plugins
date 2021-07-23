import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_ACCORDIONS } from '../defaults';
import { getEmptyAccordionNode } from './getEmptyAccordionNode';

export const getEmptyAccordionsNode = (editor: SPEditor) => {
  return {
    type: getSlatePluginType(editor, ELEMENT_ACCORDIONS),
    children: [
      getEmptyAccordionNode(editor, { active: true }), 
      getEmptyAccordionNode(editor, {})
    ],
  };
};
