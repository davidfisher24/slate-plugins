import { getAbove, someNode } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import { Transforms } from 'slate';
import { ELEMENT_TABS } from '../defaults';

export const deleteTabs = (editor: SPEditor) => {
  if (
    someNode(editor, {
      match: { type: getPlatePluginType(editor, ELEMENT_TABS) },
    })
  ) {
    const tabsItem = getAbove(editor, {
      match: { type: getPlatePluginType(editor, ELEMENT_TABS) },
    });
    if (tabsItem) {
      Transforms.removeNodes(editor, {
        at: tabsItem[1],
      });
    }
  }
};
