import { VideoNodeData } from '@insendi/editor-v2-video';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { CSSProp } from 'styled-components';

export interface VideoElementStyleProps extends VideoElementProps {
  ratio: string;
}

export interface VideoElementStyles {
  iframeWrapper: CSSProp;
  iframe: CSSProp;
  iframePlaceholder: CSSProp;
  input: CSSProp;
}


export type VideoElementProps = StyledElementProps<
  VideoNodeData,
  VideoElementStyles
>

