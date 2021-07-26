import { getElementDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { ELEMENT_PARAGRAPH } from './defaults';

export const getParagraphDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_PARAGRAPH);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'P' }],
      ...options.deserialize,
    }),
  };
};
