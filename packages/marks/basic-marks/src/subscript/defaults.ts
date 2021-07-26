import { PlatePluginOptions } from '@insendi/editor-v2-core';

export const MARK_SUBSCRIPT = 'subscript';
export const DEFAULTS_SUBSCRIPT: Partial<PlatePluginOptions> = {
  hotkey: 'mod+.',
  clear: MARK_SUBSCRIPT,
};
