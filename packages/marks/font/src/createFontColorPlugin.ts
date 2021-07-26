import { getRenderLeaf, PlatePlugin } from '@insendi/editor-v2-core';
import { MARK_COLOR } from './defaults';
import { getFontColorDeserialize } from './getColorDeserialize';

export const createFontColorPlugin = (): PlatePlugin => ({
  pluginKeys: MARK_COLOR,
  renderLeaf: getRenderLeaf(MARK_COLOR),
  deserialize: getFontColorDeserialize(),
});
