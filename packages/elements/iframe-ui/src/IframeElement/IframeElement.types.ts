import { IframeNodeData } from '@udecode/slate-plugins-iframe';
import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { IStyle } from '@uifabric/styling';

export interface IframeElementStyleProps extends ClassName {
  height: number;
}

export interface IframeElementStyleSet extends RootStyleSet {
  iframeWrapper?: IStyle;
  iframe?: IStyle;
  iframePlaceholder?: IStyle;
  input?: IStyle;
}

export type IframeElementProps = StyledElementProps<
  IframeNodeData,
  ClassName,
  IframeElementStyleSet
>;
