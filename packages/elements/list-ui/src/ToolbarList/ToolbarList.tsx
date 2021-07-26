import * as React from 'react';
import { getPreventDefaultHandler } from '@insendi/editor-v2-common';
import { useEventEditorId, useStoreEditorState } from '@insendi/editor-v2-core';
import { ELEMENT_UL, toggleList } from '@insendi/editor-v2-list';
import { ToolbarButtonProps, ToolbarElement } from '@insendi/editor-v2-toolbar';

export const ToolbarList = ({
  type = ELEMENT_UL,
  ...props
}: ToolbarButtonProps & { type?: string }) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));

  return (
    <ToolbarElement
      type={type}
      onMouseDown={
        editor &&
        getPreventDefaultHandler(toggleList, editor, {
          type,
        })
      }
      {...props}
    />
  );
};
