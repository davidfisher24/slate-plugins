import { createStyles } from '@insendi/editor-v2-styled-components';
import { css } from 'styled-components';
import { TabElementStyleProps } from './TabElement.types';

export const getTabElementStyles = (props: TabElementStyleProps) => {
  return createStyles(
    { prefixClassNames: 'TabElement', ...props },
    {
      root: css`
        background-color: ${props.active ? "#fff" : "inherit"};
        min-width: 20px;
        float: left;
        border-right: 1px solid #aaa;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
      `,
    }
  );
};
