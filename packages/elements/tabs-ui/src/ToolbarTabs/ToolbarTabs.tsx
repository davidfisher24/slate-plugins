import * as React from 'react';
import {
  getPreventDefaultHandler,
  someNode,
} from '@udecode/slate-plugins-common';
import {
  getSlatePluginType,
  useEventEditorId,
  useStoreEditorState,
} from '@udecode/slate-plugins-core';
import { ELEMENT_TABS } from '@udecode/slate-plugins-tabs';
import { ToolbarButton } from '@udecode/slate-plugins-toolbar';
import { ToolbarTabsProps } from './ToolbarTabs.types';

export const ToolbarTabs = ({ transform, ...props }: ToolbarTabsProps) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));
  const type = getSlatePluginType(editor, ELEMENT_TABS);

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
