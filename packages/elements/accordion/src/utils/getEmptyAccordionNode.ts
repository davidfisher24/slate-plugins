import { ELEMENT_DEFAULT } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { 
  ELEMENT_ACCORDION,
  ELEMENT_ACCORDION_HEADER,
  ELEMENT_ACCORDION_BODY
} from '../defaults';
import { AccordionPluginOptions } from '../types';
import { getEmptyAccordionHeaderNode } from './getEmptyAccordionHeaderNode';
import { getEmptyAccordionBodyNode } from './getEmptyAccordionBodyNode';

export const getEmptyAccordionNode = (
  editor: SPEditor,
  { active }: AccordionPluginOptions
) => {
  return {
    active,
    type: getSlatePluginType(editor, ELEMENT_ACCORDION),
    children: [
      getEmptyAccordionHeaderNode(editor),
      getEmptyAccordionBodyNode(editor)
    ],
  };
};
