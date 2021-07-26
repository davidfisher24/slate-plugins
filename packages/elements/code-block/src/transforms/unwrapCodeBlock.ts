import { unwrapNodes } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_CODE_BLOCK, ELEMENT_CODE_LINE } from '../defaults';

export const unwrapCodeBlock = (editor: SPEditor) => {
  unwrapNodes(editor, {
    match: { type: getPlatePluginType(editor, ELEMENT_CODE_LINE) },
  });
  unwrapNodes(editor, {
    match: { type: getPlatePluginType(editor, ELEMENT_CODE_BLOCK) },
    split: true,
  });
};
