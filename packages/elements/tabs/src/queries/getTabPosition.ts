import { getAbove } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { ELEMENT_TAB, ELEMENT_TAB_CONTENT } from '../defaults';

export const getTabPosition = (editor: SPEditor) => {
  const currentNode = getAbove(editor, {
    match: {
      type: [
        getPlatePluginType(editor, ELEMENT_TAB),
        getPlatePluginType(editor, ELEMENT_TAB_CONTENT),
      ],
    },
  });

  if (currentNode) {
    const [, currentPath] = currentNode;
    const [currentIndex] = currentPath.slice(-1);
    return currentIndex;
  }

  return null;
};
