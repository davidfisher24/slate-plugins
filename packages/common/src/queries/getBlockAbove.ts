import { TAncestor, TEditor } from '@insendi/editor-v2-core';
import { EditorAboveOptions } from '../types/Editor.types';
import { getAbove } from './getAbove';

/**
 * Get the block above a location (default: selection).
 */
export const getBlockAbove = <T extends TAncestor = TAncestor>(
  editor: TEditor,
  options: EditorAboveOptions<T> = {}
) =>
  getAbove<T>(editor, {
    ...options,
    block: true,
  });
