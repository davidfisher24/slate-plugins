import { PlatePluginOptions } from '@insendi/editor-v2-core';

export const MARK_SUPERSCRIPT = 'superscript';

export const DEFAULTS_SUPERSCRIPT: Partial<PlatePluginOptions> = {
  hotkey: 'mod+,',
  clear: MARK_SUPERSCRIPT,
};
