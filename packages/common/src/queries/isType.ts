import { getSlatePluginType, SPEditor } from '@udecode/slate-plugins-core';
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
  return keys.some((key) => node?.type === getSlatePluginType(editor, key));
};
