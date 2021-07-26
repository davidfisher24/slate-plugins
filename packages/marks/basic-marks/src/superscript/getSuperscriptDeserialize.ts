import { getLeafDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { MARK_SUPERSCRIPT } from './defaults';

export const getSuperscriptDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, MARK_SUPERSCRIPT);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [
        { nodeNames: ['SUP'] },
        {
          style: {
            verticalAlign: 'super',
          },
        },
      ],
      ...options.deserialize,
    }),
  };
};
