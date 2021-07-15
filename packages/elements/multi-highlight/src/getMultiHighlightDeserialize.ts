import { getLeafDeserializer } from '@udecode/slate-plugins-common';
import {
  Deserialize,
  getSlatePluginOptions,
} from '@udecode/slate-plugins-core';
import { ELEMENT_MULTI_HIGHLIGHT } from './defaults';

export const getMultiHighlightDeserialize = (): Deserialize => (editor) => {
  const options = getSlatePluginOptions(editor, ELEMENT_MULTI_HIGHLIGHT);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [{ nodeNames: ['MARK'] }],
      ...options.deserialize,
      getNode: (el) => ({
        color: el.getAttribute('data-color'),
      }),
    }),
  };
};
