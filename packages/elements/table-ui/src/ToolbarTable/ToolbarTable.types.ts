import { SPEditor } from '@insendi/editor-v2-core';
import { TablePluginOptions } from '@insendi/editor-v2-table';
import { ToolbarButtonProps } from '@insendi/editor-v2-toolbar';

export interface ToolbarTableProps
  extends ToolbarButtonProps,
    TablePluginOptions {
  transform: (editor: SPEditor, options: { header?: boolean }) => void;
}
