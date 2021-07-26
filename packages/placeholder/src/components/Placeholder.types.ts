import { StyledElementProps } from '@insendi/editor-v2-styled-components';

export interface PlaceholderProps extends StyledElementProps {
  placeholder: string;
  hideOnBlur?: boolean;
}
