import { getLeafDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { MARK_SUBSCRIPT } from './defaults';

export const getSubscriptDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, MARK_SUBSCRIPT);

  return {
    leaf: getLeafDeserializer({
      type: options.type,
      rules: [
        { nodeNames: ['SUB'] },
        {
          style: {
            verticalAlign: 'sub',
          },
        },
      ],
      ...options.deserialize,
    }),
  };
};
