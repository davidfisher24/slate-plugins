import { getNodeDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { ELEMENT_IMAGE } from './defaults';

export const getImageDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_IMAGE);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: (el) => ({
        type: options.type,
        url: el.getAttribute('src'),
      }),
      rules: [{ nodeNames: 'IMG' }],
      ...options.deserialize,
    }),
  };
};
