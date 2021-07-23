import { KeyboardHandler, SPEditor } from '@udecode/slate-plugins-core';
import { Transforms } from 'slate';
import { getNextAccordion } from './queries/getNextAccordion';
import { getPreviousAccordion } from './queries/getPreviousAccordion';
import { getAccordionsEntry } from './queries/getAccordionsEntry';
import { getAccordionPosition } from './queries/getAccordionPosition';
import { setActiveAccordion } from './utils/setActiveAccordion';

export const getAccordionsOnKeyDown = <
  T extends SPEditor = SPEditor
>(): KeyboardHandler<T> => (editor) => (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const res = getAccordionsEntry(editor, {});
    if (!res) return;

    const { accordion } = res;
    const [, accordionPath] = accordion;
    const shiftTabKey = e.shiftKey;
    const normalTabKey = !e.shiftKey;

    const accordionPosition: number | null = getAccordionPosition(editor);

    if (shiftTabKey) {
      // move left with shift + tab
      const previousAccordion = getPreviousAccordion(
        editor, accordionPath
      );

      if (previousAccordion && accordionPosition !== null) {
        const [, previousAccordionPath] = previousAccordion;
        Transforms.select(editor, previousAccordionPath);
        setActiveAccordion(editor, true);
      }
    } else if (normalTabKey) {
      // move right with tab
      const nextAccordion = getNextAccordion(editor, accordionPath);
      if (nextAccordion && accordionPosition !== null) {
        const [, nextAccordionPath] = nextAccordion;
        Transforms.select(editor, nextAccordionPath);
        setActiveAccordion(editor, true);
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
