import { VideoNodeData } from '@udecode/slate-plugins-video';
import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { IStyle } from '@uifabric/styling';

export interface VideoElementStyleProps extends ClassName {
  ratio: string;
}

export interface VideoElementStyleSet extends RootStyleSet {
  iframeWrapper?: IStyle;
  iframe?: IStyle;
  iframePlaceholder?: IStyle;
  input?: IStyle;
}

export type VideoElementProps = StyledElementProps<
  VideoNodeData,
  ClassName,
  VideoElementStyleSet
>;
