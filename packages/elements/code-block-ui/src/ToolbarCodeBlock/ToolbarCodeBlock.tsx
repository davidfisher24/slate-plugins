import * as React from 'react';
import {
  CodeBlockInsertOptions,
  ELEMENT_CODE_BLOCK,
  insertEmptyCodeBlock,
} from '@insendi/editor-v2-code-block';
import { getPreventDefaultHandler } from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  useEventEditorId,
  useStoreEditorState,
} from '@insendi/editor-v2-core';
import { ToolbarButtonProps, ToolbarElement } from '@insendi/editor-v2-toolbar';

export const ToolbarCodeBlock = ({
  options,
  ...props
}: ToolbarButtonProps & {
  options?: CodeBlockInsertOptions;
}) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));

  return (
    <ToolbarElement
      type={getPlatePluginType(editor, ELEMENT_CODE_BLOCK)}
      onMouseDown={
        editor &&
        getPreventDefaultHandler(insertEmptyCodeBlock, editor, {
          insertNodesOptions: { select: true },
          ...options,
        })
      }
      {...props}
    />
  );
};
