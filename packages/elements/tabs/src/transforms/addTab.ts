import {
  getAbove,
  getChildren,
  insertNodes,
} from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  SPEditor,
  TElement,
} from '@insendi/editor-v2-core';
import { Path } from 'slate';
import { ELEMENT_TABS } from '../defaults';
import { getTabPosition } from '../queries/getTabPosition';
import { getEmptyTabContentNode } from '../utils/getEmptyTabContentNode';
import { getEmptyTabNode } from '../utils/getEmptyTabNode';
import { setActiveTab } from '../utils/setActiveTab';

export const addTab = (editor: SPEditor) => {
  const tabsNode = getAbove(editor, {
    match: { type: [getPlatePluginType(editor, ELEMENT_TABS)] },
  });

  const currentPosition: number | null = getTabPosition(editor);

  if (tabsNode && currentPosition !== null) {
    const nextPosition = currentPosition + 1;
    const [tabsList, tabsContent] = getChildren(tabsNode);

    // INSERT NEW TAB
    const tabs = getChildren(tabsList);
    const tabPath = tabs[currentPosition][1];
    insertNodes<TElement>(
      editor,
      getEmptyTabNode(editor, {
        active: false,
      }),
      {
        at: Path.next(tabPath),
        select: true,
      }
    );

    // INSERT NEW TAB CONTENT
    const contents = getChildren(tabsContent);
    const contentPath = contents[currentPosition][1];
    insertNodes<TElement>(
      editor,
      getEmptyTabContentNode(editor, {
        active: false,
      }),
      {
        at: Path.next(contentPath),
        select: true,
      }
    );

    setActiveTab(editor, nextPosition);
  }
};
