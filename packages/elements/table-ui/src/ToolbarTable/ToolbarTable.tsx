import * as React from 'react';
import { getPreventDefaultHandler, someNode } from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  useEventEditorId,
  useStoreEditorState,
} from '@insendi/editor-v2-core';
import { ELEMENT_TABLE } from '@insendi/editor-v2-table';
import { ToolbarButton } from '@insendi/editor-v2-toolbar';
import { ToolbarTableProps } from './ToolbarTable.types';

export const ToolbarTable = ({
  transform,
  header,
  ...props
}: ToolbarTableProps) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));
  const type = getPlatePluginType(editor, ELEMENT_TABLE);

  return (
    <ToolbarButton
      active={
        !!editor?.selection &&
        someNode(editor, {
          match: { type },
        })
      }
      onMouseDown={
        !!type && editor
          ? getPreventDefaultHandler(transform, editor, { header })
          : undefined
      }
      {...props}
    />
  );
};
