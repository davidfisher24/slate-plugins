import { getAbove, setNodes } from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { ELEMENT_ACCORDION } from '../defaults';
import { AccordionItemNodeData } from '../types';

export const setActiveAccordion = (
  editor: SPEditor, active: boolean
) => {
  const accordionItem = getAbove(editor, {
    match: { type: getSlatePluginType(
      editor, ELEMENT_ACCORDION
    )},
  });

  if (accordionItem) {
    const [,accordionPath] = accordionItem;

    setNodes<TElement<AccordionItemNodeData>>(
      editor,
      { active },
      {
        at: accordionPath,
      }
    );

  }
};
