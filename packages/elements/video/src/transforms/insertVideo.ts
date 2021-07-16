import { getParent, insertNodes } from '@udecode/slate-plugins-common';
import {
  SlatePluginKey,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { ELEMENT_VIDEO } from '../defaults';
import { VideoNodeData } from '../types';

export const insertVideo = (
  editor: SPEditor,
  {
    src,
    pluginKey = ELEMENT_VIDEO,
  }: Partial<VideoNodeData> & SlatePluginKey
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
