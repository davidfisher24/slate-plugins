import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_BG_COLOR } from './defaults';
import { getFontBackgroundColorDeserialize } from './getColorDeserialize';

export const createFontBackgroundColorPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_BG_COLOR,
  renderLeaf: getRenderLeaf(MARK_BG_COLOR),
  deserialize: getFontBackgroundColorDeserialize(),
});
