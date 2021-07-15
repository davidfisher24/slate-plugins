import {
  MultiHighLightElementStyleProps,
  MultiHighLightElementStyleSet,
} from './MultiHighlightElement.types';

export const getMultiHighlightElementStyles = ({
  className,
  color,
}: MultiHighLightElementStyleProps): MultiHighLightElementStyleSet => {
  return {
    root: [
      {
        // Insert css properties
        backgroundColor: color,
      },
      className,
    ],
  }
  
};

 