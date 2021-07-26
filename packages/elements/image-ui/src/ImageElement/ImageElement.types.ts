import { ImageNodeData } from '@insendi/editor-v2-image';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { CSSProp } from 'styled-components';

export interface ImageElementStyleProps extends ImageElementProps {
  selected?: boolean;
  focused?: boolean;
}

export interface ImageElementStyles {
  img: CSSProp;
}

export interface ImageElementProps
  extends StyledElementProps<ImageNodeData, ImageElementStyles> {}
