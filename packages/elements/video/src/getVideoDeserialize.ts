import { getNodeDeserializer } from '@insendi/editor-v2-common';
import {
  Deserialize,
  getSlateClass,
  getPlatePluginOptions,
} from '@insendi/editor-v2-core';
import { ELEMENT_VIDEO } from './defaults';

export const getVideoDeserialize = (
  pluginKey = ELEMENT_VIDEO
): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, pluginKey);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: (el: HTMLElement) => {
        let src = el.getAttribute('src');
        let ratio = el.getAttribute('ratio');
        if (src) {
          [src] = src.split('?'); 
        }

        return {
          type: options.type,
          src,
          ratio
        };
      },
      rules: [
        { nodeNames: 'VIDEO' },
        { className: getSlateClass(options.type) },
      ],
      ...options.deserialize,
    }),
  };
};

