import { PlatePluginOptions } from '@insendi/editor-v2-core';

export const ELEMENT_LINK = 'a';

export const DEFAULTS_LINK: Partial<PlatePluginOptions> = {
  getNodeProps: ({ element }) => ({ url: element?.url }),
};
