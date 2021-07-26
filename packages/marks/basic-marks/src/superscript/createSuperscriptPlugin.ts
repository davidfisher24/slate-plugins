import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_SUPERSCRIPT } from './defaults';
import { getSuperscriptDeserialize } from './getSuperscriptDeserialize';

/**
 * Enables support for superscript formatting.
 */
export const createSuperscriptPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_SUPERSCRIPT,
  renderLeaf: getRenderLeaf(MARK_SUPERSCRIPT),
  deserialize: getSuperscriptDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_SUPERSCRIPT),
});
