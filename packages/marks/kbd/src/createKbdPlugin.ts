import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_KBD } from './defaults';
import { getKbdDeserialize } from './getKbdDeserialize';

/**
 * Enables support for code formatting
 */
export const createKbdPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_KBD,
  renderLeaf: getRenderLeaf(MARK_KBD),
  deserialize: getKbdDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_KBD),
});
