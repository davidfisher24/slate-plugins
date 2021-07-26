import { TElement } from '@insendi/editor-v2-core';

export const createNode = (type = 'p', text = ''): TElement => ({
  type,
  children: [{ text }],
});
