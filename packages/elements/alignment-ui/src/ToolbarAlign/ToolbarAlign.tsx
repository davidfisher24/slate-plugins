import * as React from 'react';
import { KEYS_ALIGN, upsertAlign } from '@insendi/editor-v2-alignment';
import { getPreventDefaultHandler, someNode } from '@insendi/editor-v2-common';
import { useEventEditorId, useStoreEditorState } from '@insendi/editor-v2-core';
import { ToolbarButton, ToolbarButtonProps } from '@insendi/editor-v2-toolbar';

export interface ToolbarAlignProps extends ToolbarButtonProps {
  type?: string;
  unwrapTypes?: string[];
}

export const ToolbarAlign = ({
  type,
  unwrapTypes = KEYS_ALIGN,
  ...props
}: ToolbarAlignProps) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));

  return (
    <ToolbarButton
      active={
        !!editor?.selection && !!type && someNode(editor, { match: { type } })
      }
      onMouseDown={
        editor
          ? getPreventDefaultHandler(upsertAlign, editor, {
              type,
              unwrapTypes,
            })
          : undefined
      }
      {...props}
    />
  );
};
