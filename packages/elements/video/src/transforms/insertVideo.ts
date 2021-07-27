import { getParent, insertNodes } from '@insendi/editor-v2-common';
import {
  PlatePluginKey,
  SPEditor,
  TElement,
} from '@insendi/editor-v2-core';
import { ELEMENT_VIDEO } from '../defaults';
import { VideoNodeData } from '../types';

export const insertVideo = (
  editor: SPEditor,
  {
    src,
    pluginKey = ELEMENT_VIDEO,
  }: Partial<VideoNodeData> & PlatePluginKey
): void => {
  if (!editor.selection) return;
  const selectionParentEntry = getParent(editor, editor.selection);
  if (!selectionParentEntry) return;
  const [, path] = selectionParentEntry;
  insertNodes<TElement>(
    editor,
    {
      type: pluginKey,
      src,
      children: [{ text: '' }],
    },
    { at: path }
  );
};
