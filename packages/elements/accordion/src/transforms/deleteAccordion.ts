import {
  getAbove,
  getChildren,
  hasSingleChild,
} from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { ELEMENT_ACCORDIONS } from '../defaults';
import { getAccordionPosition } from '../queries/getAccordionPosition';

export const deleteAccordion = (editor: SPEditor) => {
  const accordionsNode = getAbove(editor, {
    match: { type: [getSlatePluginType(editor, ELEMENT_ACCORDIONS)] },
  });

  const currentPosition: number | null = getAccordionPosition(editor);

  if (accordionsNode && currentPosition !== null) {
    const nextPosition = currentPosition === 0 ? 0 : currentPosition - 1;

    if (!hasSingleChild(accordionsNode[0])) {
      // REMOVE ACCORDION
      const accordion = getChildren(accordionsNode);
      const accordionPath = accordionsNode[currentPosition][1];
      Transforms.removeNodes(editor, {
        at: accordionPath,
      });

    }
  }
};
