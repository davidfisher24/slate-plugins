import * as React from 'react';
import {
  getPreventDefaultHandler,
  someNode,
} from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  useEventEditorId,
  useStoreEditorState,
} from '@insendi/editor-v2-core';
import { ELEMENT_TABS } from '@insendi/editor-v2-tabs';
import { ToolbarButton } from '@insendi/editor-v2-toolbar';
import { ToolbarTabsProps } from './ToolbarTabs.types';

export const ToolbarTabs = ({ transform, ...props }: ToolbarTabsProps) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));
  const type = getPlatePluginType(editor, ELEMENT_TABS);

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
          ? getPreventDefaultHandler(transform, editor, {})
          : undefined
      }
      {...props}
    />
  );
};
