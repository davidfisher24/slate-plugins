import { ELEMENT_DEFAULT, setNodes, unwrapNodes } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { Path } from 'slate';
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_UL } from '../defaults';

export const unwrapList = (editor: SPEditor, { at }: { at?: Path } = {}) => {
  setNodes(
    editor,
    {
      type: getPlatePluginType(editor, ELEMENT_DEFAULT),
    },
    { at }
  );

  unwrapNodes(editor, {
    at,
    match: { type: getPlatePluginType(editor, ELEMENT_LI) },
  });

  unwrapNodes(editor, {
    at,
    match: {
      type: [
        getPlatePluginType(editor, ELEMENT_UL),
        getPlatePluginType(editor, ELEMENT_OL),
      ],
    },
    split: true,
  });
};
