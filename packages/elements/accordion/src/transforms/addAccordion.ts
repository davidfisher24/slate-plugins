import {
  getAbove,
  getChildren,
  insertNodes,
} from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { Path } from 'slate';
import { ELEMENT_ACCORDIONS } from '../defaults';
import { getAccordionPosition } from '../queries/getAccordionPosition';
import { getEmptyAccordionNode } from '../utils/getEmptyAccordionNode';

export const addAccordion = (editor: SPEditor) => {
  const accordionsNode = getAbove(editor, {
    match: { type: [getSlatePluginType(editor, ELEMENT_ACCORDIONS)] },
  });

  const currentPosition: number | null = getAccordionPosition(editor);

  if (accordionsNode && currentPosition !== null) {
    const nextPosition = currentPosition + 1;

    // INSERT NEW ACCORDION
    const accordions = getChildren(accordionsNode);
    const accordionPath = accordions[currentPosition][1];
    insertNodes<TElement>(
      editor,
      getEmptyAccordionNode(editor, {
        active: false,
      }),
      {
        at: Path.next(accordionPath),
        select: true,
      }
    );
  }
};
