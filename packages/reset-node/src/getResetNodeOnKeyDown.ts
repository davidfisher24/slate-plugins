import { isCollapsed, setNodes, someNode } from '@insendi/editor-v2-common';
import { KeyboardHandler, TElement } from '@insendi/editor-v2-core';
import isHotkey from 'is-hotkey';
import { ResetBlockTypePluginOptions } from './types';

export const SIMULATE_BACKSPACE: any = {
  key: '',
  which: 8,
};

export const getResetNodeOnKeyDown = ({
  rules,
}: ResetBlockTypePluginOptions): KeyboardHandler => (editor) => (event) => {
  let reset;

  if (editor.selection && isCollapsed(editor.selection)) {
    rules.forEach(({ types, defaultType, hotkey, predicate, onReset }) => {
      if (hotkey && isHotkey(hotkey, event as any)) {
        if (predicate(editor) && someNode(editor, { match: { type: types } })) {
          event.preventDefault?.();

          setNodes<TElement>(editor, { type: defaultType });

          onReset?.(editor);

          reset = true;
        }
      }
    });
  }

  return reset;
};
