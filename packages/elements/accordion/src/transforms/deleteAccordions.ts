import { getAbove, someNode } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { ELEMENT_ACCORDIONS } from '../defaults';

export const deleteAccordions = (editor: SPEditor) => {
  if (
    someNode(editor, {
      match: { type: getSlatePluginType(editor, ELEMENT_ACCORDIONS) },
    })
  ) {
    const accordionsItem = getAbove(editor, {
      match: { type: getSlatePluginType(editor, ELEMENT_ACCORDIONS) },
    });
    if (accordionsItem) {
      Transforms.removeNodes(editor, {
        at: accordionsItem[1],
      });
    }
  }
};
