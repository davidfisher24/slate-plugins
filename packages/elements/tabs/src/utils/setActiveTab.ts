import { getAbove, getChildren, setNodes } from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { ELEMENT_TABS } from '../defaults';
import { TabItemNodeData } from '../types';

export const setActiveTab = (editor: SPEditor, activeIndex: number) => {
  // Check toggle code block for hints here
  const tabsItem = getAbove(editor, {
    match: { type: getSlatePluginType(editor, ELEMENT_TABS) },
  });

  if (tabsItem) {
    const [tabsList, tabsContent] = getChildren(tabsItem);

    const tabs = getChildren(tabsList);
    const tabsContents = getChildren(tabsContent);

    tabs.forEach((tab, idx) => {
      setNodes<TElement<TabItemNodeData>>(
        editor,
        { active: idx === activeIndex },
        {
          at: tab[1],
        }
      );
    });

    tabsContents.forEach((tabContent, idx) => {
      setNodes<TElement<TabItemNodeData>>(
        editor,
        { active: idx === activeIndex },
        {
          at: tabContent[1],
        }
      );
    });
  }
};
