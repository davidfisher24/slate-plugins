import { getText } from '@insendi/editor-v2-common';
import { TEditor } from '@insendi/editor-v2-core';
import { IndentCodeLineOptions } from '../transforms/indentCodeLine';

export const getIndentDepth = (
  editor: TEditor,
  { codeLine }: IndentCodeLineOptions
) => {
  const [, codeLinePath] = codeLine;
  const text = getText(editor, codeLinePath);
  return text.search(/\S|$/);
};
