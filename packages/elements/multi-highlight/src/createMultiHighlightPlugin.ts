import { getToggleElementOnKeyDown } from '@udecode/slate-plugins-common';
import { getRenderLeaf, SlatePlugin } from '@udecode/slate-plugins-core';
import { ELEMENT_MULTI_HIGHLIGHT } from './defaults';
import { getMultiHighlightDeserialize } from './getMultiHighlightDeserialize';

/**
 * Enables support for multiple colour highlights, useful for
 * quotations and passages.
 */

export const createMultiHighlightPlugin = (): SlatePlugin => ({
  pluginKeys: ELEMENT_MULTI_HIGHLIGHT,
  renderLeaf: getRenderLeaf(ELEMENT_MULTI_HIGHLIGHT),
  deserialize: getMultiHighlightDeserialize(),
  onKeyDown: getToggleElementOnKeyDown(ELEMENT_MULTI_HIGHLIGHT),
});

