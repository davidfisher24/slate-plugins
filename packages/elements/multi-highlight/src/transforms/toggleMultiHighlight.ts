import { TEditor } from '@udecode/slate-plugins-core';
import { castArray } from 'lodash';
import { removeMark } from '@udecode/slate-plugins-common';
import { ELEMENT_MULTI_HIGHLIGHT } from '../defaults';
import { isMultiHighlightActive } from '../queries';

export const toggleMultiHighlight = (
    editor: TEditor,
    clear: string | string[] = [],
    color: string
    ) => {
    if (!editor.selection) return;

    const isActive = isMultiHighlightActive(editor, color);

    if (isActive) {
        removeMark(editor, { key: ELEMENT_MULTI_HIGHLIGHT });
        return;
    }

    const clears: string[] = castArray(clear);
    clears.forEach((item) => {
        removeMark(editor, { key: item });
    });

    editor.addMark(ELEMENT_MULTI_HIGHLIGHT, color);
};