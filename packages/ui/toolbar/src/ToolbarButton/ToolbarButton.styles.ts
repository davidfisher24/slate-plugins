import { createStyles } from '@insendi/editor-v2-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';
import { ToolbarButtonProps } from './ToolbarButton.types';

export const getToolbarButtonStyles = (props: ToolbarButtonProps) =>
  createStyles(
    { prefixClassNames: 'ToolbarButton', ...props },
    {
      root: [
        tw`flex justify-center items-center select-none cursor-pointer align-middle`,
        tw`width[28px] height[24px]`,
        css`
          > svg {
            ${tw`block w-5 h-5`}
          }
        `,
      ],
      ...(props.active && { active: {} }),
    }
  );
