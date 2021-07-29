import { SPEditor } from '@insendi/editor-v2-core';
import { TabsPluginOptions } from '@insendi/editor-v2-tabs';
import { ToolbarButtonProps } from '@insendi/editor-v2-toolbar';

export interface ToolbarTabsProps
  extends ToolbarButtonProps,
    TabsPluginOptions {
  transform: (editor: SPEditor, options: {}) => void;
}
