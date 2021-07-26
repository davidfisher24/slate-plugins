import { PlatePlugin } from '@insendi/editor-v2-core';
import { getResetNodeOnKeyDown } from './getResetNodeOnKeyDown';
import { ResetBlockTypePluginOptions } from './types';

/**
 * Enables support for resetting block type from rules.
 */
export const createResetNodePlugin = (
  options: ResetBlockTypePluginOptions
): PlatePlugin => ({
  onKeyDown: getResetNodeOnKeyDown(options),
});
