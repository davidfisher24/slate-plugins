import {
  getPlatePluginTypes,
  getRenderElement,
  PlatePlugin,
} from '@insendi/editor-v2-plate';
import { EDITABLE_VOID } from './defaults';

export const createEditableVoidPlugin = (): PlatePlugin => ({
  renderElement: getRenderElement(EDITABLE_VOID),
  voidTypes: getPlatePluginTypes(EDITABLE_VOID),
});
