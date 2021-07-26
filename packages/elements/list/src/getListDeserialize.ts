import { getElementDeserializer } from '@insendi/editor-v2-common';
import { Deserialize, getPlatePluginOptions } from '@insendi/editor-v2-core';
import { ELEMENT_LI, ELEMENT_LIC, ELEMENT_OL, ELEMENT_UL } from './defaults';

export const getListDeserialize = (): Deserialize => (editor) => {
  const li = getPlatePluginOptions(editor, ELEMENT_LI);
  const lic = getPlatePluginOptions(editor, ELEMENT_LIC);
  const ul = getPlatePluginOptions(editor, ELEMENT_UL);
  const ol = getPlatePluginOptions(editor, ELEMENT_OL);

  return {
    element: [
      ...getElementDeserializer({
        type: ul.type,
        rules: [{ nodeNames: 'UL' }],
        ...ul.deserialize,
      }),
      ...getElementDeserializer({
        type: ol.type,
        rules: [{ nodeNames: 'OL' }],
        ...ol.deserialize,
      }),
      ...getElementDeserializer({
        type: li.type,
        rules: [{ nodeNames: 'LI' }],
        ...li.deserialize,
      }),
      ...getElementDeserializer({
        type: lic.type,
        rules: [{ nodeNames: 'LIC' }],
        ...lic.deserialize,
      }),
    ],
  };
};
