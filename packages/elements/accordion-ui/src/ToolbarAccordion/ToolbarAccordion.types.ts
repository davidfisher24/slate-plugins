import { SPEditor } from '@udecode/slate-plugins-core';
import { AccordionPluginOptions } from '@udecode/slate-plugins-accordion';
import { ToolbarButtonProps } from '@udecode/slate-plugins-toolbar';

export interface ToolbarAccordionProps
  extends ToolbarButtonProps,
  AccordionPluginOptions {
  transform: (editor: SPEditor, options: {}) => void;
}
