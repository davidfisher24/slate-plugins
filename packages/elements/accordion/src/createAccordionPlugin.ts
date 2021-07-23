import { getRenderElement, SlatePlugin } from '@udecode/slate-plugins-core';
import { KEYS_ACCORDIONS } from './defaults';
import { getAccordionDeserialize } from './getAccordionDeserialize';
import { getAccordionsOnKeyDown } from './getAccordionsOnKeyDown';
import { withAccordions } from './withAccordions';

/**
 * Enables support for accordions.
 */
export const createAccordionPlugin = (): SlatePlugin => ({
  pluginKeys: KEYS_ACCORDIONS,
  renderElement: getRenderElement(KEYS_ACCORDIONS),
  deserialize: getAccordionDeserialize(),
  onKeyDown: getAccordionsOnKeyDown(),
  withOverrides: withAccordions(),
});
