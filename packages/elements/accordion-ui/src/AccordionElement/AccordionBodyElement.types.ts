import { AccordionBodyItemNodeData } from '@udecode/slate-plugins-accordion';
import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';

export interface AccordionBodyElementStyleProps
  extends ClassName,
    AccordionBodyItemNodeData {
  active?: boolean;
}

export interface AccordionBodyElementStyleSet extends RootStyleSet {}

export type AccordionBodyElementProps = StyledElementProps<
  AccordionBodyItemNodeData,
  AccordionBodyElementStyleProps,
  AccordionBodyElementStyleSet
>;
