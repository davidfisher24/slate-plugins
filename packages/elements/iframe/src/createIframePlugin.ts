import {
  getRenderElement,
  getSlatePluginTypes,
  SlatePlugin,
} from '@udecode/slate-plugins-core';
import { ELEMENT_IFRAME } from './defaults';
import { getIframeDeserialize } from './getIframeDeserialize';
import { withIframe } from './withIframe';

/**
 * Enables support for embeddable media such as YouTube
 * or Vimeo videos
 */
export const createIframePlugin = ({
  pluginKey = ELEMENT_IFRAME,
}: {
  pluginKey?: string;
} = {}): SlatePlugin => ({
  pluginKeys: pluginKey,
  renderElement: getRenderElement(pluginKey),
  deserialize: getIframeDeserialize(pluginKey),
  voidTypes: getSlatePluginTypes(pluginKey),
  withOverrides: withIframe(),
});
