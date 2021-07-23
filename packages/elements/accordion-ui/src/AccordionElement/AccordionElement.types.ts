import { AccordionItemNodeData } from '@udecode/slate-plugins-accordion';
import {
  ClassName,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';

export interface AccordionElementStyleProps extends ClassName, AccordionItemNodeData {
  active?: boolean;
}

export interface AccordionElementStyleSet extends RootStyleSet {}

export type AccordionElementProps = StyledElementProps<
  AccordionItemNodeData,
  AccordionElementStyleProps,
  AccordionElementStyleSet
>;
