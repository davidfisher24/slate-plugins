import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_ACCORDION_BODY } from '../defaults';
import { getEmptyAccordionContentNode } from './getEmptyAccordionContentNode';

export const getEmptyAccordionBodyNode = (editor: SPEditor) => {
  return {
    type: getSlatePluginType(editor, ELEMENT_ACCORDION_BODY),
    children: [
      getEmptyAccordionContentNode(editor)
    ],
  };
};
