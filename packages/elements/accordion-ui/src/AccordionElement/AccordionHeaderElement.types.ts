import { AccordionHeaderItemNodeData } from '@udecode/slate-plugins-accordion';
import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';

export interface AccordionHeaderElementStyleProps
  extends ClassName,
    AccordionHeaderItemNodeData {
  active?: boolean;
}

export interface AccordionHeaderElementStyleSet extends RootStyleSet {}

export type AccordionHeaderElementProps = StyledElementProps<
  AccordionHeaderItemNodeData,
  AccordionHeaderElementStyleProps,
  AccordionHeaderElementStyleSet
>;
