import {
  getRenderElement,
  getPlatePluginTypes,
  PlatePlugin,
} from '@insendi/editor-v2-core';
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
} = {}): PlatePlugin => ({
  pluginKeys: pluginKey,
  renderElement: getRenderElement(pluginKey),
  deserialize: getVideoDeserialize(pluginKey),
  voidTypes: getPlatePluginTypes(pluginKey),
  withOverrides: withVideo(),
});
