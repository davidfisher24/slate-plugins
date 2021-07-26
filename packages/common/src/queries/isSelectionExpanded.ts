import { TEditor } from '@insendi/editor-v2-core';
import { isExpanded } from './isExpanded';

/**
 * Is the selection expanded.
 */
export const isSelectionExpanded = (editor: TEditor) =>
  isExpanded(editor.selection);
