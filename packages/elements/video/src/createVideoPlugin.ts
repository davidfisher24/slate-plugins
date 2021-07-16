import {
  getRenderElement,
  getSlatePluginTypes,
  SlatePlugin,
} from '@udecode/slate-plugins-core';
import { ELEMENT_VIDEO } from './defaults';
import { getVideoDeserialize } from './getVideoDeserialize';
import { withVideo } from './withVideo';

/**
 * Enables support for embeddable media such as YouTube
 * or Vimeo videos
 */
export const createVideoPlugin = ({
  pluginKey = ELEMENT_VIDEO,
}: {
  pluginKey?: string;
} = {}): SlatePlugin => ({
  pluginKeys: pluginKey,
  renderElement: getRenderElement(pluginKey),
  deserialize: getVideoDeserialize(pluginKey),
  voidTypes: getSlatePluginTypes(pluginKey),
  withOverrides: withVideo(),
});
