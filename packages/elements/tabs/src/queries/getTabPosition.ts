import { getAbove } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_TAB, ELEMENT_TAB_CONTENT } from '../defaults';

export const getTabPosition = (editor: SPEditor) => {
  const currentNode = getAbove(editor, {
    match: {
      type: [
        getSlatePluginType(editor, ELEMENT_TAB),
        getSlatePluginType(editor, ELEMENT_TAB_CONTENT),
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
