import { getAbove, getParent, someNode } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Location } from 'slate';
import {
  ELEMENT_ACCORDIONS,
  ELEMENT_ACCORDION,
  ELEMENT_ACCORDION_HEADER,
  ELEMENT_ACCORDION_BODY
} from '../defaults';

/**
 * If at (default = selection) is in tab>tab_list>tab or tab>tab_content_list>conten
 * return hierachy of node entries.
 */
export const getAccordionsEntry = (
  editor: SPEditor,
  { at = editor.selection }: { at?: Location | null } = {}
) => {
  if (
    at &&
    someNode(editor, {
      at,
      match: {
        type: [
          getSlatePluginType(editor, ELEMENT_ACCORDION_HEADER),
          getSlatePluginType(editor, ELEMENT_ACCORDION_BODY),
        ],
      },
    })
  ) {
    const selectionParent = getParent(editor, at);
    if (!selectionParent) return;
    const [, paragraphPath] = selectionParent;

    const accordion =
      getAbove(editor, {
        at,
        match: {
          type: getSlatePluginType(editor, ELEMENT_ACCORDION),
        },
      }) || getParent(editor, paragraphPath);

    if (!accordion) return;
    const [accordionNode, accordionPath] = accordion;

    if (
      accordionNode.type !== getSlatePluginType(editor, ELEMENT_ACCORDION)
    )
      return;

    const accordions = getParent(editor, accordionPath);
    if (!accordions) return;
    const [accordionsNode, accordionsPath] = accordions;

    if (
      accordionsNode.type !== getSlatePluginType(editor, ELEMENT_ACCORDIONS)
    )
      return;

    return {
      accordions,
      accordion,
    };
  }
};
