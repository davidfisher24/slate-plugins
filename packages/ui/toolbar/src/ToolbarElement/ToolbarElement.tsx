import * as React from 'react';
import {
  getPreventDefaultHandler,
  someNode,
  toggleNodeType,
} from '@insendi/editor-v2-common';
import { useEventEditorId, useStoreEditorState } from '@insendi/editor-v2-core';
import { ToolbarButton } from '../ToolbarButton/ToolbarButton';
import { ToolbarElementProps } from './ToolbarElement.types';

/**
 * Toolbar button to toggle the type of elements in selection.
 */
export const ToolbarElement = ({
  type,
  inactiveType,
  ...props
}: ToolbarElementProps) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));

  return (
    <ToolbarButton
      active={!!editor?.selection && someNode(editor, { match: { type } })}
      onMouseDown={
        editor &&
        getPreventDefaultHandler(toggleNodeType, editor, {
          activeType: type,
          inactiveType,
        })
      }
      {...props}
    />
  );
};
