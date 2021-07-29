import { getAbove, getChildren, setNodes } from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  SPEditor,
  TElement,
} from '@insendi/editor-v2-core';
import { ELEMENT_TABS } from '../defaults';
import { TabItemNodeData } from '../types';

export const setActiveTab = (editor: SPEditor, activeIndex: number) => {
  // Check toggle code block for hints here
  const tabsItem = getAbove(editor, {
    match: { type: getPlatePluginType(editor, ELEMENT_TABS) },
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
