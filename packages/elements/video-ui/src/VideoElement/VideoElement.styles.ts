import { createStyles } from '@insendi/editor-v2-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';
import { VideoElementStyleProps } from './VideoElement.types';

export const getVideoElementStyles = (props: VideoElementStyleProps) => {
  return createStyles(
    { prefixClassNames: 'VideoElement', ...props },
    {
      root: tw`relative`,
      iframeWrapper: [
        tw`relative h-0`,
        css`
          padding-bottom: ${props.ratio === '16:9' ? '56.25%' : '75%'};
        `,
      ],
      iframe: [tw`absolute top-0 left-0 w-full h-full`],
      iframePlaceholder: [
        tw`absolute top-0 left-0 w-full h-full`,
        css`
          z-index: 1000;
          background: #aaa;
          display: flex;
          text-align: center;
          align-content: center;
          justify-content: center;
          flex-direction: column;
        `,
      ],
    }
  );
};
