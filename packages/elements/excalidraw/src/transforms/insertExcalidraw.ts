import { getParent, insertNodes } from '@insendi/editor-v2-common';
import { PlatePluginKey, SPEditor, TElement } from '@insendi/editor-v2-core';
import { ELEMENT_EXCALIDRAW } from '../defaults';
import { ExcalidrawNodeData } from '../types';

export const insertExcalidraw = (
  editor: SPEditor,
  {
    pluginKey = ELEMENT_EXCALIDRAW,
  }: Partial<ExcalidrawNodeData> & PlatePluginKey
): void => {
  if (!editor.selection) return;

  const selectionParentEntry = getParent(editor, editor.selection);
  if (!selectionParentEntry) return;

  const [, path] = selectionParentEntry;

  insertNodes<TElement<ExcalidrawNodeData>>(
    editor,
    {
      type: pluginKey,
      children: [{ text: '' }],
    },
    { at: path }
  );
};
