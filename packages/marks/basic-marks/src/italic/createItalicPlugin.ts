import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_ITALIC } from './defaults';
import { getItalicDeserialize } from './getItalicDeserialize';

/**
 * Enables support for italic formatting.
 */
export const createItalicPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_ITALIC,
  renderLeaf: getRenderLeaf(MARK_ITALIC),
  deserialize: getItalicDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_ITALIC),
});
