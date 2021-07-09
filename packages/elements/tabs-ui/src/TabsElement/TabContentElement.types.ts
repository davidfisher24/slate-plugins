import { TabContentItemNodeData } from '@udecode/slate-plugins-tabs';
import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';

export interface TabContentElementStyleProps
  extends ClassName,
    TabContentItemNodeData {
  active?: boolean;
}

export interface TabContentElementStyleSet extends RootStyleSet {}

export type TabContentElementProps = StyledElementProps<
  TabContentItemNodeData,
  TabContentElementStyleProps,
  TabContentElementStyleSet
>;
