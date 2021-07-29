import { getRenderElement, PlatePlugin } from '@insendi/editor-v2-core';
import { KEYS_TABS } from './defaults';
import { getTabsDeserialize } from './getTabsDeserialize';
import { getTabsOnKeyDown } from './getTabsOnKeyDown';
import { withTabs } from './withTabs';

/**
 * Enables support for tables.
 */
export const createTabsPlugin = (): PlatePlugin => ({
  pluginKeys: KEYS_TABS,
  renderElement: getRenderElement(KEYS_TABS),
  deserialize: getTabsDeserialize(),
  onKeyDown: getTabsOnKeyDown(),
  withOverrides: withTabs(),
});
