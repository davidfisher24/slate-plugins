import { getLeafDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { MARK_HIGHLIGHT } from './defaults';

export const getHighlightDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, MARK_HIGHLIGHT);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [{ nodeNames: ['MARK'] }],
      ...options.deserialize,
    }),
  };
};
