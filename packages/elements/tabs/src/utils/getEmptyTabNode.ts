import { ELEMENT_DEFAULT } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_TAB } from '../defaults';
import { TabsPluginOptions } from '../types';

export const getEmptyTabNode = (
  editor: SPEditor,
  { active }: TabsPluginOptions
) => {
  return {
    active,
    type: getPlatePluginType(editor, ELEMENT_TAB),
    children: [
      {
        type: getPlatePluginType(editor, ELEMENT_DEFAULT),
        children: [{ text: 'Tab' }],
      },
    ],
  };
};
