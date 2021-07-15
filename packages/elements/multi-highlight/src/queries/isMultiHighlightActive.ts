import { TEditor } from '@udecode/slate-plugins-core';
import { Editor } from 'slate';
import { ELEMENT_MULTI_HIGHLIGHT } from '../defaults';

export const isMultiHighlightActive = (editor: TEditor, color: string) => {
    const marks = Editor.marks(editor);
    return marks ? marks[ELEMENT_MULTI_HIGHLIGHT] === color : false;
};