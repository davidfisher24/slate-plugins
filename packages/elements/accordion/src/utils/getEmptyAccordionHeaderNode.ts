import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_DEFAULT } from '@udecode/slate-plugins-common';
import { ELEMENT_ACCORDION_HEADER } from '../defaults';

export const getEmptyAccordionHeaderNode = (editor: SPEditor) => {
  return {
    type: getSlatePluginType(editor, ELEMENT_ACCORDION_HEADER),
    children: [
      {
        type: getSlatePluginType(editor, ELEMENT_DEFAULT),
        children: [{ text: 'Content' }],
      },
    ],
  };
};
