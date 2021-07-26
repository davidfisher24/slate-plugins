/** @jsx jsx */
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { MentionNodeData } from '../../../types';

jsx;

export const editorWithMentionable = ((
  <editor>
    <hp>
      t1 @t2
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

export const mentionables: MentionNodeData[] = [
  { value: 't2' },
  { value: 't22' },
  { value: 't222' },
];
