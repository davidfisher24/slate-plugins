import { getElementDeserializer } from '@insendi/editor-v2-common';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@insendi/editor-v2-core';
import { ELEMENT_TABS } from './defaults';

export const getTabsDeserialize = (): Deserialize => (editor) => {
  const tabs = getPlatePluginOptions(editor, ELEMENT_TABS);
  return {
    element: [
      ...getElementDeserializer({
        type: tabs.type,
        rules: [{ nodeNames: 'TABS' }],
        ...tabs.deserialize,
      }),
    ],
  };
};
