import { SPRenderElementProps } from '@insendi/editor-v2-core';
import { Element } from 'slate';
import { StyledProps } from '../types/StyledProps';

export type StyledElementProps<
  TElement = Element,
  TStyles = {}
> = SPRenderElementProps<TElement> & StyledProps<TStyles>;
