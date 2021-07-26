import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_BOLD } from './defaults';
import { getBoldDeserialize } from './getBoldDeserialize';

/**
 * Enables support for bold formatting
 */
export const createBoldPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_BOLD,
  renderLeaf: getRenderLeaf(MARK_BOLD),
  deserialize: getBoldDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_BOLD),
});
