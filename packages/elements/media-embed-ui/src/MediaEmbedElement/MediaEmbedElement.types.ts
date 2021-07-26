import { MediaEmbedNodeData } from '@insendi/editor-v2-media-embed';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { CSSProp } from 'styled-components';

export interface MediaEmbedElementStyles {
  iframeWrapper: CSSProp;
  iframe: CSSProp;
  input: CSSProp;
}

export type MediaEmbedElementProps = StyledElementProps<
  MediaEmbedNodeData,
  MediaEmbedElementStyles
>;
