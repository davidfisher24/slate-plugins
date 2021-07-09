import { ELEMENT_DEFAULT } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_TAB } from '../defaults';
import { TabsPluginOptions } from '../types';

export const getEmptyTabNode = (
  editor: SPEditor,
  { active }: TabsPluginOptions
) => {
  return {
    active,
    type: getSlatePluginType(editor, ELEMENT_TAB),
    children: [
      {
        type: getSlatePluginType(editor, ELEMENT_DEFAULT),
        children: [{ text: 'Tab' }],
      },
    ],
  };
};
