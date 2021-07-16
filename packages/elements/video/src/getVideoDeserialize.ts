import { getNodeDeserializer } from '@udecode/slate-plugins-common';
import {
  Deserialize,
  getSlateClass,
  getSlatePluginOptions,
} from '@udecode/slate-plugins-core';
import { ELEMENT_VIDEO } from './defaults';

export const getVideoDeserialize = (
  pluginKey = ELEMENT_VIDEO
): Deserialize => (editor) => {
  const options = getSlatePluginOptions(editor, pluginKey);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: (el: HTMLElement) => {
        let src = el.getAttribute('src');
        if (src) {
          [src] = src.split('?');

          return {
            type: options.type,
            src,
          };
        }
      },
      rules: [
        { nodeNames: 'VIDEO' },
        { className: getSlateClass(options.type) },
      ],
      ...options.deserialize,
    }),
  };
};
