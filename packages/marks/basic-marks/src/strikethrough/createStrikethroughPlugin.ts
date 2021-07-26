import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_STRIKETHROUGH } from './defaults';
import { getStrikethroughDeserialize } from './getStrikethroughDeserialize';

/**
 * Enables support for strikethrough formatting.
 */
export const createStrikethroughPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_STRIKETHROUGH,
  renderLeaf: getRenderLeaf(MARK_STRIKETHROUGH),
  deserialize: getStrikethroughDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_STRIKETHROUGH),
});
