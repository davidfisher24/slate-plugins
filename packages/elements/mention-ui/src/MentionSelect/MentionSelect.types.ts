import { GetMentionSelectProps, MentionNodeData } from '@insendi/editor-v2-mention';
import { StyledProps } from '@insendi/editor-v2-styled-components';
import { CSSProp } from 'styled-components';

export interface MentionSelectStyles {
  mentionItem: CSSProp;
  mentionItemSelected: CSSProp;
}

export interface MentionSelectProps
  extends GetMentionSelectProps,
    StyledProps<MentionSelectStyles> {
  renderLabel?: (mentionable: MentionNodeData) => string;
}
