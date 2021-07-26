import { PlatePlugin } from '@insendi/editor-v2-core';
import { getSoftBreakOnKeyDown } from './getSoftBreakOnKeyDown';
import { SoftBreakPluginOptions } from './types';

/**
 * Insert soft break following configurable rules.
 * Each rule specifies a hotkey and query options.
 */
export const createSoftBreakPlugin = (
  options: SoftBreakPluginOptions = {}
): PlatePlugin => ({
  onKeyDown: getSoftBreakOnKeyDown(options),
});
