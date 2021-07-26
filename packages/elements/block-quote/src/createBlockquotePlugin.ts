import { getToggleElementOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderElement, PlatePlugin } from '@insendi/editor-v2-core';
import { ELEMENT_BLOCKQUOTE } from './defaults';
import { getBlockquoteDeserialize } from './getBlockquoteDeserialize';

/**
 * Enables support for block quotes, useful for
 * quotations and passages.
 */
export const createBlockquotePlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_BLOCKQUOTE,
  renderElement: getRenderElement(ELEMENT_BLOCKQUOTE),
  deserialize: getBlockquoteDeserialize(),
  onKeyDown: getToggleElementOnKeyDown(ELEMENT_BLOCKQUOTE),
});
