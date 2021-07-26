import { PlatePlugin } from '@insendi/editor-v2-core';
import { getPreviewDecorate } from './getPreviewDecorate';
import { getPreviewRenderLeaf } from './getPreviewRenderLeaf';

export const createPreviewPlugin = (): PlatePlugin => ({
  decorate: getPreviewDecorate(),
  renderLeaf: getPreviewRenderLeaf(),
});
