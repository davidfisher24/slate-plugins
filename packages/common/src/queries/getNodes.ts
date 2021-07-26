import { TEditor, TNode } from '@insendi/editor-v2-core';
import { Editor } from 'slate';
import { unhangRange, UnhangRangeOptions } from '../transforms/unhangRange';
import { EditorNodesOptions } from '../types/Editor.types';
import { getQueryOptions } from './match';

export const getNodes = <T extends TNode>(
  editor: TEditor,
  options: EditorNodesOptions & UnhangRangeOptions = {}
) => {
  unhangRange(editor, options);

  return Editor.nodes<T>(editor, getQueryOptions(editor, options));
};
