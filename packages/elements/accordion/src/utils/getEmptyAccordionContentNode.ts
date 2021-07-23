import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_DEFAULT } from '@udecode/slate-plugins-common';
import { ELEMENT_ACCORDION_CONTENT } from '../defaults';

export const getEmptyAccordionContentNode = (editor: SPEditor) => {
  return {
    type: getSlatePluginType(editor, ELEMENT_ACCORDION_CONTENT),
    children: [
      {
        type: getSlatePluginType(editor, ELEMENT_DEFAULT),
        children: [{ text: 'Content' }],
      },
    ],
  };
};
