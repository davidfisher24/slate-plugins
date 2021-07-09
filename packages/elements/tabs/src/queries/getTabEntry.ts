import { getAbove, getParent, someNode } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Location } from 'slate';
import {
  ELEMENT_TAB,
  ELEMENT_TAB_CONTENT,
  ELEMENT_TABS_CONTENT,
  ELEMENT_TABS_LIST,
} from '../defaults';

/**
 * If at (default = selection) is in tab>tab_list>tab or tab>tab_content_list>conten
 * return hierachy of node entries.
 */
export const getTabEntry = (
  editor: SPEditor,
  { at = editor.selection }: { at?: Location | null } = {}
) => {
  if (
    at &&
    someNode(editor, {
      at,
      match: {
        type: [
          getSlatePluginType(editor, ELEMENT_TAB),
          getSlatePluginType(editor, ELEMENT_TAB_CONTENT),
        ],
      },
    })
  ) {
    const selectionParent = getParent(editor, at);
    if (!selectionParent) return;
    const [, paragraphPath] = selectionParent;

    const tab =
      getAbove(editor, {
        at,
        match: {
          type: [
            getSlatePluginType(editor, ELEMENT_TAB),
            getSlatePluginType(editor, ELEMENT_TAB_CONTENT),
          ],
        },
      }) || getParent(editor, paragraphPath);

    if (!tab) return;
    const [tabNode, tabPath] = tab;

    if (
      tabNode.type !== getSlatePluginType(editor, ELEMENT_TAB) &&
      tabNode.type !== getSlatePluginType(editor, ELEMENT_TAB_CONTENT)
    )
      return;

    const tabList = getParent(editor, tabPath);
    if (!tabList) return;
    const [tabListNode, tabListPath] = tabList;

    if (
      tabListNode.type !== getSlatePluginType(editor, ELEMENT_TABS_LIST) &&
      tabListNode.type !== getSlatePluginType(editor, ELEMENT_TABS_CONTENT)
    )
      return;

    const tabElement = getParent(editor, tabListPath);
    if (!tabElement) return;

    return {
      tabElement,
      tabList,
      tab,
    };
  }
};
