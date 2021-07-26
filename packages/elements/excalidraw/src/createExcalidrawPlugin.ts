import {
  getPlatePluginTypes,
  getRenderElement,
  PlatePlugin,
} from '@insendi/editor-v2-core';
import { ELEMENT_EXCALIDRAW } from './defaults';
import { getExcalidrawDeserialize } from './getExcalidrawDeserialize';

/**
 * Enables support for Excalidraw drawing tool within a Slate document
 */
export const createExcalidrawPlugin = ({
  pluginKey = ELEMENT_EXCALIDRAW,
}: {
  pluginKey?: string;
} = {}): PlatePlugin => ({
  pluginKeys: pluginKey,
  renderElement: getRenderElement(pluginKey),
  deserialize: getExcalidrawDeserialize(pluginKey),
  voidTypes: getPlatePluginTypes(pluginKey),
});
