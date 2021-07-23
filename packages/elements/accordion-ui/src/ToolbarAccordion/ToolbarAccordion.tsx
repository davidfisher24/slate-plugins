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
import { ELEMENT_ACCORDIONS } from '@udecode/slate-plugins-accordion';
import { ToolbarButton } from '@udecode/slate-plugins-toolbar';
import { ToolbarAccordionProps } from './ToolbarAccordion.types';

export const ToolbarAccordion = ({ transform, ...props }: ToolbarAccordionProps) => {
  const editor = useStoreEditorState(useEventEditorId('focus'));
  const type = getSlatePluginType(editor, ELEMENT_ACCORDIONS);

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
