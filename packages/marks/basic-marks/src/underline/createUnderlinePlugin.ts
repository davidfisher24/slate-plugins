import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_UNDERLINE } from './defaults';
import { getUnderlineDeserialize } from './getUnderlineDeserialize';

/**
 * Enables support for underline formatting.
 */
export const createUnderlinePlugin = (): PlatePlugin => ({
  pluginKeys: MARK_UNDERLINE,
  renderLeaf: getRenderLeaf(MARK_UNDERLINE),
  deserialize: getUnderlineDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_UNDERLINE),
});
