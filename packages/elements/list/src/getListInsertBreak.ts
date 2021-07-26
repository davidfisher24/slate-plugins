import { ELEMENT_DEFAULT, isBlockAboveEmpty } from '@insendi/editor-v2-common';
import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import {
  getResetNodeOnKeyDown,
  SIMULATE_BACKSPACE,
} from '@insendi/editor-v2-reset-node';
import { getListItemEntry } from './queries/getListItemEntry';
import { insertListItem } from './transforms/insertListItem';
import { moveListItemUp } from './transforms/moveListItemUp';
import { unwrapList } from './transforms/unwrapList';
import { ELEMENT_LI } from './defaults';

export const getListInsertBreak = (editor: SPEditor) => {
  if (!editor.selection) return;

  const res = getListItemEntry(editor, {});
  let moved: boolean | undefined;

  // If selection is in a li
  if (res) {
    const { list, listItem } = res;

    // If selected li is empty, move it up.
    if (isBlockAboveEmpty(editor)) {
      moved = moveListItemUp(editor, {
        list,
        listItem,
      });

      if (moved) return true;
    }
  }

  const didReset = getResetNodeOnKeyDown({
    rules: [
      {
        types: [getPlatePluginType(editor, ELEMENT_LI)],
        defaultType: getPlatePluginType(editor, ELEMENT_DEFAULT),
        predicate: () => !moved && isBlockAboveEmpty(editor),
        onReset: (_editor) => unwrapList(_editor as SPEditor),
      },
    ],
  })(editor)(SIMULATE_BACKSPACE as any);
  if (didReset) return true;

  /**
   * If selection is in li > p, insert li.
   */
  if (!moved) {
    const inserted = insertListItem(editor);
    if (inserted) return true;
  }
};
