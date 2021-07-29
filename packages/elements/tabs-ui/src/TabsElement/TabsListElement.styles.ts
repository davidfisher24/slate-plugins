import {
    createStyles,
    StyledElementProps,
} from '@insendi/editor-v2-styled-components';
import { css } from 'styled-components';

export const getTabsListElementStyles = (props: StyledElementProps) =>
createStyles(
    { prefixClassNames: 'TabsListElement', ...props },
    {
    root: css`
        display: flex;
        overflow: hidden;
        border: 1px solid #ccc;
        list-style: none;
        background-color: #f1f1f1;
        margin-bottom: 0;
    `,
    }
);