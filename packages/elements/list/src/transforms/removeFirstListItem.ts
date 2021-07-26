import { isFirstChild } from '@insendi/editor-v2-common';
import { SPEditor, TElement } from '@insendi/editor-v2-core';
import { NodeEntry } from 'slate';
import { isListNested } from '../queries/isListNested';
import { moveListItemUp } from './moveListItemUp';

/**
 * If list is not nested and if li is not the first child, move li up.
 */
export const removeFirstListItem = (
  editor: SPEditor,
  {
    list,
    listItem,
  }: {
    list: NodeEntry<TElement>;
    listItem: NodeEntry<TElement>;
  }
) => {
  const [, listPath] = list;
  const [, listItemPath] = listItem;

  if (!isListNested(editor, listPath) && !isFirstChild(listItemPath)) {
    moveListItemUp(editor, { list, listItem });

    return true;
  }

  return false;
};
