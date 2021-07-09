import { SPEditor } from '@udecode/slate-plugins-core';
import { TabsPluginOptions } from '@udecode/slate-plugins-tabs';
import { ToolbarButtonProps } from '@udecode/slate-plugins-toolbar';

export interface ToolbarTabsProps
  extends ToolbarButtonProps,
    TabsPluginOptions {
  transform: (editor: SPEditor, options: {}) => void;
}
