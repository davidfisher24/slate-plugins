import { MentionNode, MentionNodeData } from '@insendi/editor-v2-mention';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';

export interface MentionElementStyleProps extends MentionElementProps {
  selected?: boolean;
  focused?: boolean;
}

// renderElement props
export interface MentionElementProps extends StyledElementProps<MentionNode> {
  /**
   * Prefix rendered before mention
   */
  prefix?: string;
  onClick?: (mentionNode: MentionNode) => void;
  renderLabel?: (mentionable: MentionNodeData) => string;
}
