import { match } from '@insendi/editor-v2-common';
import { SPEditor } from '@insendi/editor-v2-core';
import { Ancestor } from 'slate';
import { getListTypes } from './getListTypes';

/**
 * Is there a list child in the node.
 */
export const hasListChild = (editor: SPEditor, node: Ancestor) =>
  node.children.some((n) => match(n, { type: getListTypes(editor) }));
