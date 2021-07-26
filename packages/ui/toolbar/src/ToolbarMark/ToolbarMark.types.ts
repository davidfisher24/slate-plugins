import { PlatePluginOptions } from '@insendi/editor-v2-core';
import { ToolbarButtonProps } from '../ToolbarButton/ToolbarButton.types';

export interface ToolbarMarkProps
  extends ToolbarButtonProps,
    Pick<PlatePluginOptions, 'type' | 'clear'> {}
