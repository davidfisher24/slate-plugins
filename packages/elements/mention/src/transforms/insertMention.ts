import { insertNodes } from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  PlatePluginKey,
  SPEditor,
} from '@insendi/editor-v2-core';
import { Transforms } from 'slate';
import { ELEMENT_MENTION } from '../defaults';
import { MentionNode, MentionNodeData } from '../types';

export const insertMention = (
  editor: SPEditor,
  {
    insertSpaceAfterMention,
    data,
    pluginKey = ELEMENT_MENTION,
  }: {
    data: MentionNodeData;
    insertSpaceAfterMention?: boolean;
  } & PlatePluginKey
) => {
  const mentionNode: MentionNode = {
    type: getPlatePluginType(editor, pluginKey),
    children: [{ text: '' }],
    ...data,
  };

  insertNodes<MentionNode>(editor, mentionNode);
  Transforms.move(editor);
  if (insertSpaceAfterMention) {
    Transforms.insertText(editor, ' ');
    Transforms.move(editor);
  }
};
