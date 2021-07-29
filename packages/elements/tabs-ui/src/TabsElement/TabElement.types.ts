import { TabItemNodeData } from '@insendi/editor-v2-tabs';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';

export interface TabElementStyleProps extends TabElementProps {
  active?: boolean;
}

export interface TabElementStyles {}

export type TabElementProps = StyledElementProps<
  TabItemNodeData,
  TabElementStyles
>;

