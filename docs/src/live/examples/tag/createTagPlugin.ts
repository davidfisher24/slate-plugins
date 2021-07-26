import { getPlatePluginTypes, getRenderElement } from '@insendi/editor-v2-plate';
import { PlatePlugin } from '@insendi/editor-v2-core';
import { ELEMENT_TAG } from './defaults';
import { getTagDeserialize } from './getTagDeserialize';

/**
 * Enables support for hypertags.
 */
export const createTagPlugin = (): PlatePlugin => ({
  renderElement: getRenderElement(ELEMENT_TAG),
  deserialize: getTagDeserialize(),
  inlineTypes: getPlatePluginTypes(ELEMENT_TAG),
  voidTypes: getPlatePluginTypes(ELEMENT_TAG),
});
