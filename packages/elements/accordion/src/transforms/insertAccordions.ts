import { insertNodes, someNode } from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { ELEMENT_ACCORDIONS } from '../defaults';
import { getEmptyAccordionsNode } from '../utils/getEmptyAccordionsNode';

export const insertAccordions = (editor: SPEditor) => {
  if (
    !someNode(editor, {
      match: { type: getSlatePluginType(editor, ELEMENT_ACCORDIONS) },
    })
  ) {
    insertNodes<TElement>(editor, getEmptyAccordionsNode(editor));
  }
};
