import { getLeafDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { MARK_UNDERLINE } from './defaults';

export const getUnderlineDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, MARK_UNDERLINE);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [
        { nodeNames: ['U'] },
        {
          style: {
            textDecoration: 'underline',
          },
        },
      ],
      ...options.deserialize,
    }),
  };
};
