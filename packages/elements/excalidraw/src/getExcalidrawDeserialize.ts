import { getNodeDeserializer } from '@insendi/editor-v2-common';
import {
  Deserialize,
  getPlatePluginOptions,
  getSlateClass,
} from '@insendi/editor-v2-core';
import { ELEMENT_EXCALIDRAW } from './defaults';

export const getExcalidrawDeserialize = (
  pluginKey = ELEMENT_EXCALIDRAW
): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, pluginKey);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: () => {
        // let url = el.getAttribute('src');
        // if (url) {
        //  [url] = url.split('?');

        return {
          type: options.type,
          //  url,
        };
        // }
      },
      rules: [{ className: getSlateClass(options.type) }],
      ...options.deserialize,
    }),
  };
};
