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

      `,
    }
  );