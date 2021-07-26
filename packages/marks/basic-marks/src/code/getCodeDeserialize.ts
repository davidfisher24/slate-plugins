import { getLeafDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { MARK_CODE } from './defaults';

export const getCodeDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, MARK_CODE);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [
        { nodeNames: ['CODE'] },
        {
          style: {
            wordWrap: 'break-word',
          },
        },
      ],
      ...options.deserialize,
    }),
  };
};
