import { getNodeDeserializer } from '@udecode/slate-plugins-common';
import {
  Deserialize,
  getSlateClass,
  getSlatePluginOptions,
} from '@udecode/slate-plugins-core';
import { ELEMENT_IFRAME } from './defaults';

export const getIframeDeserialize = (
  pluginKey = ELEMENT_IFRAME
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
        { nodeNames: 'FRAME' },
        { className: getSlateClass(options.type) },
      ],
      ...options.deserialize,
    }),
  };
};
