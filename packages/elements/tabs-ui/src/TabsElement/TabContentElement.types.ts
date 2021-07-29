import { TabContentItemNodeData } from '@insendi/editor-v2-tabs';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';

export interface TabContentElementStyleProps extends TabContentElementProps {
  active?: boolean;
}

export interface TabContentElementStyles {}

export type TabContentElementProps = StyledElementProps<
  TabContentItemNodeData,
  TabContentElementStyles
>;
