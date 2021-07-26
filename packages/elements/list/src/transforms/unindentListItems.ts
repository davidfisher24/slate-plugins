import { SPEditor } from '@insendi/editor-v2-core';
import { moveListItems } from './moveListItems';

export const unindentListItems = (editor: SPEditor) => {
  moveListItems(editor, false);
};
