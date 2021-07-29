import {
  createStyles,
  StyledElementProps,
} from '@insendi/editor-v2-styled-components';
import { css } from 'styled-components';

export const getTabContentElementStyles = (props: StyledElementProps) =>
  createStyles(
    { prefixClassNames: 'TabContentElement', ...props },
    {
      root: css`
        width: 100%;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
      `,
    }
  );