import {
  getAbove,
  getChildren,
  hasSingleChild,
} from '@udecode/slate-plugins-common';
import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { ELEMENT_TABS } from '../defaults';
import { getTabPosition } from '../queries/getTabPosition';
import { setActiveTab } from '../utils/setActiveTab';

export const deleteTab = (editor: SPEditor) => {
  const tabsNode = getAbove(editor, {
    match: { type: [getSlatePluginType(editor, ELEMENT_TABS)] },
  });

  const currentPosition: number | null = getTabPosition(editor);

  if (tabsNode && currentPosition !== null) {
    const nextPosition = currentPosition === 0 ? 0 : currentPosition - 1;
    const [tabsList, tabsContent] = getChildren(tabsNode);

    if (!hasSingleChild(tabsList[0]) && !hasSingleChild(tabsContent[0])) {
      // REMOVE TAB
      const tabs = getChildren(tabsList);
      const tabPath = tabs[currentPosition][1];
      Transforms.removeNodes(editor, {
        at: tabPath,
      });

      // REMOVE TAB CONTENT
      const contents = getChildren(tabsContent);
      const contentPath = contents[currentPosition][1];
      Transforms.removeNodes(editor, {
        at: contentPath,
      });

      setActiveTab(editor, nextPosition);
    }
  }
};
