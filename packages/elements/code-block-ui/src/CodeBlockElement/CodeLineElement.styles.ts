import {
  createStyles,
  StyledElementProps,
} from '@insendi/editor-v2-styled-components';

export const getCodeLineElementStyles = (props: StyledElementProps) =>
  createStyles(
    { prefixClassNames: 'CodeLineElement', ...props },
    {
      root: [{}],
    }
  );
