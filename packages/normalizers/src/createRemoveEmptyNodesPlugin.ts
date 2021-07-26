import {
  getPlatePluginWithOverrides,
  isElement,
  WithOverride,
} from '@insendi/editor-v2-core';
import castArray from 'lodash/castArray';
import { Node, NodeEntry, Transforms } from 'slate';

/**
 * Remove nodes with empty text.
 */
export const withRemoveEmptyNodes = (options: {
  type: string | string[];
}): WithOverride => (editor) => {
  const types = castArray(options.type);

  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]: NodeEntry) => {
    if (
      isElement(node) &&
      node.type &&
      types.includes(node.type) &&
      Node.string(node) === ''
    ) {
      Transforms.removeNodes(editor, { at: path });
      return;
    }

    normalizeNode([node, path]);
  };

  return editor;
};

/**
 * @see {@link withRemoveEmptyNodes}
 */
export const createRemoveEmptyNodesPlugin = getPlatePluginWithOverrides(
  withRemoveEmptyNodes
);
