import { HTMLAttributes } from 'react';
import { StyledProps } from '@insendi/editor-v2-styled-components';

export interface ToolbarProps
  extends StyledProps,
    HTMLAttributes<HTMLDivElement> {
  children?: any;
}
