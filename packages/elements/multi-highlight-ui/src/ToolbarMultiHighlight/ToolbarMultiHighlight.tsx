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
import {
  ToolbarButton,
  ToolbarButtonProps,
} from '@udecode/slate-plugins-toolbar';


export interface ToolbarMultiHighlightProps extends ToolbarButtonProps {
  clear: 'string | string[] | undefined'
}



export const ToolbarMultiHighlight = (
  { clear, ...props }: ToolbarMultiHighlightProps
) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));

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
        {...props}
      />
      <ToolbarButton
        active={
          !!editor?.selection && 
          isMultiHighlightActive(editor, 'red')
        }
        onMouseDown={
          editor
            ? getPreventDefaultHandler(
              toggleMultiHighlight, editor, clear, 'red')
            : undefined
        }
        {...props}
      />
      <ToolbarButton
        active={
          !!editor?.selection && 
          isMultiHighlightActive(editor, 'green')
        }
        onMouseDown={
          editor
            ? getPreventDefaultHandler(
              toggleMultiHighlight, editor, clear, 'green')
            : undefined
        }
        {...props}
      />
      <ToolbarButton
        active={
          !!editor?.selection && 
          isMultiHighlightActive(editor, 'blue')
        }
        onMouseDown={
          editor
            ? getPreventDefaultHandler(
              toggleMultiHighlight, editor, clear, 'blue')
            : undefined
        }
        {...props}
      />
    </>
  );
};
