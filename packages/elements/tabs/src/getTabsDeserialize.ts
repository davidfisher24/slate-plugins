import { getElementDeserializer } from '@udecode/slate-plugins-common';
import {
  Deserialize,
  getSlatePluginOptions,
} from '@udecode/slate-plugins-core';
import { ELEMENT_TABS } from './defaults';

export const getTabsDeserialize = (): Deserialize => (editor) => {
  const tabs = getSlatePluginOptions(editor, ELEMENT_TABS);
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
