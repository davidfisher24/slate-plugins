import * as React from 'react';
import {
  useEventEditorId,
  useStoreEditorState,
} from '@udecode/slate-plugins-core';
import { getPreventDefaultHandler, removeMark } from '@udecode/slate-plugins-common';
import { 
  toggleMultiHighlight,
  isMultiHighlightActive,
  ELEMENT_MULTI_HIGHLIGHT
} from '@udecode/slate-plugins-multi-highlight';
import { ToolbarButton } from '@udecode/slate-plugins-toolbar';
import { 
  ToolbarMultiHighlightProps,
  ToolbarMultiHighlightConfigProps
 } from './ToolbarMultiHighlight.types'

export const ToolbarMultiHighlight = (
  { clear, config, removeIcon }: ToolbarMultiHighlightProps
) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));

  if (!config) return (<></>)
  return (
    <>
      <ToolbarButton
        onMouseDown={
          editor
            ? getPreventDefaultHandler(
              removeMark, editor, {
                key: ELEMENT_MULTI_HIGHLIGHT 
              })
            : undefined
        }
        icon={removeIcon}
      />
      {config.map((buttonConfig: ToolbarMultiHighlightConfigProps) => {
        const { color, icon } = buttonConfig;
        return (
          <ToolbarButton
            active={
              !!editor?.selection && 
              isMultiHighlightActive(editor, color)
            }
            onMouseDown={
              editor
                ? getPreventDefaultHandler(
                  toggleMultiHighlight, editor, clear, color)
                : undefined
            }
            key={color}
            icon={icon}
          />
        )
      })}
    </>
  );
};

