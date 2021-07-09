import { getAbove, someNode } from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { ELEMENT_TABS } from '../defaults';

export const deleteTabs = (editor: SPEditor) => {
  if (
    someNode(editor, {
      match: { type: getSlatePluginType(editor, ELEMENT_TABS) },
    })
  ) {
    const tabsItem = getAbove(editor, {
      match: { type: getSlatePluginType(editor, ELEMENT_TABS) },
    });
    if (tabsItem) {
      Transforms.removeNodes(editor, {
        at: tabsItem[1],
      });
    }
  }
};
