import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_CODE } from './defaults';
import { getCodeDeserialize } from './getCodeDeserialize';

/**
 * Enables support for code formatting
 */
export const createCodePlugin = (): PlatePlugin => ({
  pluginKeys: MARK_CODE,
  renderLeaf: getRenderLeaf(MARK_CODE),
  deserialize: getCodeDeserialize(),
  onKeyDown: getToggleMarkOnKeyDown(MARK_CODE),
});
