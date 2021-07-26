import { TEditor } from '@insendi/editor-v2-core';
import { Ancestor, Editor, Node } from 'slate';

/**
 * Is an ancestor empty (empty text and no inline children).
 */
export const isAncestorEmpty = (editor: TEditor, node: Ancestor) =>
  !Node.string(node) && !node.children.some((n) => Editor.isInline(editor, n));
