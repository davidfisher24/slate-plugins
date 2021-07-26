import { getBlockAbove, queryNode } from '@insendi/editor-v2-common';
import { KeyboardHandler } from '@insendi/editor-v2-core';
import isHotkey from 'is-hotkey';
import { SoftBreakOnKeyDownOptions } from './types';

export const getSoftBreakOnKeyDown = ({
  rules = [{ hotkey: 'shift+enter' }],
}: SoftBreakOnKeyDownOptions = {}): KeyboardHandler => (editor) => (event) => {
  const entry = getBlockAbove(editor);
  if (!entry) return;

  rules.forEach(({ hotkey, query }) => {
    if (isHotkey(hotkey, event as any) && queryNode(entry, query)) {
      event.preventDefault();

      editor.insertText('\n');
    }
  });
};
