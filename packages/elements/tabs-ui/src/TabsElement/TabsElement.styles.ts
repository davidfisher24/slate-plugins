import {
  createStyles,
  StyledElementProps,
} from '@insendi/editor-v2-styled-components';
import { css } from 'styled-components';

export const getTabsElementStyles = (props: StyledElementProps) =>
  createStyles(
    { prefixClassNames: 'TabsElement', ...props },
    {
      root: css`
        margin: 10px 0;
        border-collapse: collapse;
        width: 100%;
        border-bottom: 2px solid #eaeaea;
      `,
    }
  );