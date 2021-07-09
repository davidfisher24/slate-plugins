import { KeyboardHandler, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { getNextTab } from './queries/getNextTab';
import { getPreviousTab } from './queries/getPreviousTab';
import { getTabEntry } from './queries/getTabEntry';
import { getTabPosition } from './queries/getTabPosition';
import { setActiveTab } from './utils/setActiveTab';

export const getTabsOnKeyDown = <
  T extends SPEditor = SPEditor
>(): KeyboardHandler<T> => (editor) => (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const res = getTabEntry(editor, {});
    if (!res) return;

    const { tab } = res;
    const [, tabPath] = tab;
    const shiftTabKey = e.shiftKey;
    const normalTabKey = !e.shiftKey;

    const tabPosition: number | null = getTabPosition(editor);

    if (shiftTabKey) {
      // move left with shift + tab
      const previousTab = getPreviousTab(editor, tabPath);

      if (previousTab && tabPosition !== null) {
        const [, previousTabPath] = previousTab;
        Transforms.select(editor, previousTabPath);
        setActiveTab(editor, tabPosition - 1);
      }
    } else if (normalTabKey) {
      // move right with tab
      const nextTab = getNextTab(editor, tabPath);
      if (nextTab && tabPosition !== null) {
        const [, nextTabPath] = nextTab;
        Transforms.select(editor, nextTabPath);
        setActiveTab(editor, tabPosition + 1);
      }
    }
  }

  /* if (e.key === 'a' && (e.metaKey || e.ctrlKey)) {

    const res = getAbove<TElement>(editor, { match: { type: ELEMENT_TABS } });
    if (!res) return;

    const [, tabsPath] = res;

    Transforms.select(editor, tabsPath);

    e.preventDefault();
    e.stopPropagation();
  } */
};
