import { match, moveChildren } from '@insendi/editor-v2-common';
import { SPEditor } from '@insendi/editor-v2-core';
import { Node, NodeEntry, Path } from 'slate';
import { getListTypes } from '../queries/getListTypes';

export const moveListSiblingsAfterCursor = (
  editor: SPEditor,
  {
    at,
    to,
  }: {
    at: Path;
    to: Path;
  }
): number => {
  const offset = at[at.length - 1];
  at = Path.parent(at);
  const listNode = Node.get(editor, at);
  const listEntry: NodeEntry = [listNode, at];

  if (
    !match(listNode, { type: getListTypes(editor) }) ||
    Path.isParent(at, to) // avoid moving nodes within its own list
  ) {
    return 0;
  }

  return moveChildren(editor, {
    at: listEntry,
    to,
    fromStartIndex: offset + 1,
  });
};
