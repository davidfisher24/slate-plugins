import { getNodeDeserializer } from '@insendi/editor-v2-common';
import {
  Deserialize,
  getPlatePluginOptions,
  getSlateClass,
} from '@insendi/editor-v2-core';
import { ELEMENT_MENTION } from './defaults';

export const getMentionDeserialize = (
  pluginKey = ELEMENT_MENTION
): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, pluginKey);

  return {
    element: getNodeDeserializer({
      type: options.type,
      getNode: (el) => ({
        type: options.type,
        value: el.getAttribute('data-slate-value'),
      }),
      rules: [{ className: getSlateClass(options.type) }],
      ...options.deserialize,
    }),
  };
};
