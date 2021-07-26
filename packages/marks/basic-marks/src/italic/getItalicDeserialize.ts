import { getLeafDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { MARK_ITALIC } from './defaults';

export const getItalicDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, MARK_ITALIC);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [
        { nodeNames: ['EM', 'I'] },
        {
          style: {
            fontStyle: 'italic',
          },
        },
      ],
      ...options.deserialize,
    }),
  };
};
