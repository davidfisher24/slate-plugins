import { getElementDeserializer } from '@udecode/slate-plugins-common';
import {
  Deserialize,
  getSlatePluginOptions,
} from '@udecode/slate-plugins-core';
import { ELEMENT_ACCORDIONS } from './defaults';

export const getAccordionDeserialize = (): Deserialize => (editor) => {
  const accordions = getSlatePluginOptions(editor, ELEMENT_ACCORDIONS);
  return {
    element: [
      ...getElementDeserializer({
        type: accordions.type,
        rules: [{ nodeNames: 'ACCORDIONS' }],
        ...accordions.deserialize,
      }),
    ],
  };
};
