import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_SUBSCRIPT } from './defaults';
import { getSubscriptDeserialize } from './getSubscriptDeserialize';

/**
 * Enables support for subscript formatting.
 */
export const createSubscriptPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_SUBSCRIPT,
  renderLeaf: getRenderLeaf(MARK_SUBSCRIPT),
  deserialize: getSubscriptDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_SUBSCRIPT),
});
