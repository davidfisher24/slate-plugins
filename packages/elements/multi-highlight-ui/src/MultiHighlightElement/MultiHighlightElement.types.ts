import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';

export interface MultiHighLightNodeData {
  color: string;
}

export interface MultiHighLightElementStyleProps
  extends ClassName,
    MultiHighLightNodeData {}

export interface MultiHighLightElementStyleSet extends RootStyleSet {
  }

export type MultiHighLightElementProps = StyledElementProps<
  MultiHighLightNodeData,
  MultiHighLightElementStyleProps,
  MultiHighLightElementStyleSet
>;
