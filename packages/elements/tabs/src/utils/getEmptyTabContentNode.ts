import { ELEMENT_DEFAULT } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_TAB_CONTENT } from '../defaults';
import { TabsPluginOptions } from '../types';

export const getEmptyTabContentNode = (
  editor: SPEditor,
  { active }: TabsPluginOptions
) => {
  return {
    active,
    type: getPlatePluginType(editor, ELEMENT_TAB_CONTENT),
    children: [
      {
        type: getPlatePluginType(editor, ELEMENT_DEFAULT),
        children: [{ text: 'Content' }],
      },
    ],
  };
};
