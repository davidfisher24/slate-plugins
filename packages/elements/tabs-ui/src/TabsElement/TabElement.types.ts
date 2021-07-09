import { TabItemNodeData } from '@udecode/slate-plugins-tabs';
import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';

export interface TabElementStyleProps extends ClassName, TabItemNodeData {
  active?: boolean;
}

export interface TabElementStyleSet extends RootStyleSet {}

export type TabElementProps = StyledElementProps<
  TabItemNodeData,
  TabElementStyleProps,
  TabElementStyleSet
>;
