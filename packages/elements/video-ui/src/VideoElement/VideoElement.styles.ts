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
        css`padding-bottom: ${props.ratio === '16:9' ? '56.25%' : '75%'};`
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
          > p {
            font-size: 5rem;
          }
        `,
      ],
      input: [
        tw`w-full`,
        css`
          padding: 0.5em;
          font-size: 0.85em;
          border: 2px solid #ddd;
          background: #fafafa;
          margin-top: 5px;
        `,
      ],
    }
  );

  /*return createStyles(
    { prefixClassNames: 'VideoElement', ...props },
    {
      root: [
        tw`inline-block`,
        tw`lineHeight[1.2]`,
        css`
          position: relative;
        `,
      ],
      iframeWrapper: [
        ratio === '16:9' ? tw`paddingBottom: 56.25%` : tw`paddingBottom: 75%`,
        css`
          position: relative;
          height: 0;
        `,
        
      ],
      iframe: [
        css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `
      ],
      iframePlaceholder: [
        css`
          position: absolute;
          display: flex;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #aaa;
          z-index: 1000;
          top-align: center;
          justify-content: center;
          align-content: center;
          flex-direction: column;

        `
        selectors: {
          '> p': {
            fontSize: '5rem'
          },
        },
      ],
      input: [
        css`
          font-size: 0.85em;
          height: 0;
          width: 100%;
          padding: 0.5em;
          border: 2px solid #ddd;
          background: #fafafa;
          margin-top: 5px;
        `
      ],
    }
  );*/
};
