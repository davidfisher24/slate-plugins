import { ClassName } from '@udecode/slate-plugins-ui-fluent';
import { IframeElementStyleSet, IframeElementStyleProps } from './IframeElement.types';

export const getIframeElementStyles = ({
  className,
  height
}: IframeElementStyleProps): IframeElementStyleSet => {
  return {
    root: [
      {
        // Insert css properties
        position: 'relative',
      },
      className,
    ],
    iframeWrapper: {
      //padding: '75% 0 0 0',
      position: 'relative',
      height,
    },
    iframe: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    iframePlaceholder: {
      position: 'absolute',
      display: 'flex',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#aaa',
      zIndex: 1000,
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      selectors: {
        '> p': {
          fontSize: '5rem'
        },
      },
    },
    input: {
      fontSize: '0.85em',
      width: '100%',
      padding: '0.5em',
      border: '2px solid #ddd',
      background: '#fafafa',
      marginTop: '5px',
    },
  };
};
