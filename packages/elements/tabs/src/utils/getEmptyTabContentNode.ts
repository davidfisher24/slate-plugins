import { ELEMENT_DEFAULT } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_TAB_CONTENT } from '../defaults';
import { TabsPluginOptions } from '../types';

export const getEmptyTabContentNode = (
  editor: SPEditor,
  { active }: TabsPluginOptions
) => {
  return {
    active,
    type: getSlatePluginType(editor, ELEMENT_TAB_CONTENT),
    children: [
      {
        type: getSlatePluginType(editor, ELEMENT_DEFAULT),
        children: [{ text: 'Content' }],
      },
    ],
  };
};
