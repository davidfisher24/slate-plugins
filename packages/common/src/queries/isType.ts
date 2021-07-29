import { getPlatePluginType, SPEditor } from '@insendi/editor-v2-core';
import castArray from 'lodash/castArray';
/**
 * Does the node match the type provided.
 */

export const isType = (
  editor: SPEditor,
  node: any,
  pluginKey?: string | string[]
) => {
  const keys = castArray(pluginKey);
  //return keys.some((key) => node?.type === getPlatePluginType(editor, key));
  keys.forEach((key) => {
    if (node?.type === getPlatePluginType(editor, key)) return true;
  });
  return false;
};
