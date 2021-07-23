import { getAbove } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { ELEMENT_ACCORDION_HEADER, ELEMENT_ACCORDION_BODY } from '../defaults';

export const getAccordionPosition = (editor: SPEditor) => {
  const currentNode = getAbove(editor, {
    match: {
      type: [
        getSlatePluginType(editor, ELEMENT_ACCORDION_HEADER),
        getSlatePluginType(editor, ELEMENT_ACCORDION_BODY),
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
