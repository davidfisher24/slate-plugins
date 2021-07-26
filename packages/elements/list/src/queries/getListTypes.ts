import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_OL, ELEMENT_UL } from '../defaults';

export const getListTypes = (editor: SPEditor) => {
  return [
    getPlatePluginType(editor, ELEMENT_OL),
    getPlatePluginType(editor, ELEMENT_UL),
  ];
};
