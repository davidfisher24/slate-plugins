import { setNodes } from '@insendi/editor-v2-common';
import { TEditor, TElement } from '@insendi/editor-v2-core';
import { Editor, Location, Transforms } from 'slate';
import { AutoformatRule } from '../types';

export const autoformatBlock = (
  editor: TEditor,
  type: string,
  at: Location,
  { preFormat, format }: Pick<AutoformatRule, 'preFormat' | 'format'>
) => {
  Transforms.delete(editor, { at });

  preFormat?.(editor);

  if (!format) {
    setNodes<TElement>(
      editor,
      { type },
      {
        match: (n) => Editor.isBlock(editor, n),
      }
    );
  } else {
    format(editor);
  }
};
