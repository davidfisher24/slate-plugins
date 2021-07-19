import { getParent, insertNodes } from '@udecode/slate-plugins-common';
import {
  SlatePluginKey,
  SPEditor,
  TElement,
} from '@udecode/slate-plugins-core';
import { ELEMENT_IFRAME } from '../defaults';
import { IframeNodeData } from '../types';

export const insertIframe = (
  editor: SPEditor,
  {
    src,
    pluginKey = ELEMENT_IFRAME,
  }: Partial<IframeNodeData> & SlatePluginKey
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
