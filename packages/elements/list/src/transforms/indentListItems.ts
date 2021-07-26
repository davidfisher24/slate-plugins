import { SPEditor } from '@insendi/editor-v2-core';
import { moveListItems } from './moveListItems';

export const indentListItems = (editor: SPEditor) => {
  moveListItems(editor, true);
};
