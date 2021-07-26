import {
  ExcalidrawProps,
  LibraryItems,
} from '@excalidraw/excalidraw-next/types/types';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { CSSProp } from 'styled-components';
import { ExcalidrawNodeData } from '../../types';

export interface ExcalidrawElementStyles {
  excalidrawWrapper: CSSProp;
}

export interface ExcalidrawElementProps
  extends StyledElementProps<ExcalidrawNodeData, ExcalidrawElementStyles> {
  scrollToContent?: boolean;

  libraryItems?: LibraryItems;

  excalidrawProps?: ExcalidrawProps;
}
