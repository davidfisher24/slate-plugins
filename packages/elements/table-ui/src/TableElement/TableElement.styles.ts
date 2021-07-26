import {
  createStyles,
  StyledElementProps,
} from '@insendi/editor-v2-styled-components';
import tw from 'twin.macro';

export const getTableElementStyles = (props: StyledElementProps) =>
  createStyles(
    { prefixClassNames: 'TableElement', ...props },
    {
      root: tw`w-full my-2.5 mx-0 border-collapse`,
    }
  );
