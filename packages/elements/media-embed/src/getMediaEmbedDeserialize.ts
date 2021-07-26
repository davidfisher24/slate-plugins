import { getNodeDeserializer } from '@insendi/editor-v2-common';
import {
  Deserialize,
  getPlatePluginOptions,
  getSlateClass,
} from '@insendi/editor-v2-core';
import { ELEMENT_MEDIA_EMBED } from './defaults';

export const getMediaEmbedDeserialize = (
  pluginKey = ELEMENT_MEDIA_EMBED
): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, pluginKey);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: (el: HTMLElement) => {
        let url = el.getAttribute('src');
        if (url) {
          [url] = url.split('?');

          return {
            type: options.type,
            url,
          };
        }
      },
      rules: [
        { nodeNames: 'IFRAME' },
        { className: getSlateClass(options.type) },
      ],
      ...options.deserialize,
    }),
  };
};
