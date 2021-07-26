import { TEditor } from '@insendi/editor-v2-core';
import { Editor, Location, Point } from 'slate';

/**
 * {@link Editor.isEnd}. If point is null, return false.
 */
export const isEnd = (
  editor: TEditor,
  point: Point | null | undefined,
  at: Location
): boolean => !!point && Editor.isEnd(editor, point, at);
