import { getToggleElementOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderElement, PlatePlugin } from '@insendi/editor-v2-core';
import { ELEMENT_PARAGRAPH } from './defaults';
import { getParagraphDeserialize } from './getParagraphDeserialize';

/**
 * Enables support for paragraphs.
 */
export const createParagraphPlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_PARAGRAPH,
  renderElement: getRenderElement(ELEMENT_PARAGRAPH),
  deserialize: getParagraphDeserialize(),
  onKeyDown: getToggleElementOnKeyDown(ELEMENT_PARAGRAPH),
});
