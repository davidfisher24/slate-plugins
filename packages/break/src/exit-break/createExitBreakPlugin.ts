import { PlatePlugin } from '@insendi/editor-v2-core';
import { getExitBreakOnKeyDown } from './getExitBreakOnKeyDown';
import { ExitBreakPluginOptions } from './types';

/**
 * Insert soft break following configurable rules.
 * Each rule specifies a hotkey and query options.
 */
export const createExitBreakPlugin = (
  options: ExitBreakPluginOptions = {}
): PlatePlugin => ({
  onKeyDown: getExitBreakOnKeyDown(options),
});
