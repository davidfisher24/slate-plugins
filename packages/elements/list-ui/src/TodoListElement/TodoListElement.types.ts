import { TodoListItemNodeData } from '@insendi/editor-v2-list';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { CSSProp } from 'styled-components';

export interface TodoListElementStyleProps extends TodoListElementProps {
  checked?: boolean;
}

export interface TodoListElementStyles {
  checkboxWrapper: CSSProp;
  checkbox: CSSProp;
  text: CSSProp;
  rootChecked?: CSSProp;
}

export type TodoListElementProps = StyledElementProps<
  TodoListItemNodeData,
  TodoListElementStyles
>;
