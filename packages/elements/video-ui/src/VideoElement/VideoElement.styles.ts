import { ClassName } from '@udecode/slate-plugins-ui-fluent';
import { VideoElementStyleSet, VideoElementStyleProps } from './VideoElement.types';

export const getVideoElementStyles = ({
  className,
  ratio
}: VideoElementStyleProps): VideoElementStyleSet => {
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
      paddingBottom: ratio === '16:9' ? '56.25%' : '75%',
      height: 0,
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
      //paddingTop: '30%',
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
