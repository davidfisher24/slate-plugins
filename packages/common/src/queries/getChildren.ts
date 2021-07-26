import { TAncestor, TDescendant } from '@insendi/editor-v2-core';
import { NodeEntry, Path } from 'slate';

/**
 * Get children node entries of a node entry.
 * TODO: try Node.children
 */
export const getChildren = <T extends TAncestor>(nodeEntry: NodeEntry<T>) => {
  const [node, path] = nodeEntry;

  const children = node.children || [];

  return children.map((child, index) => {
    const childPath: Path = path.concat([index]);
    return [child, childPath] as NodeEntry<TDescendant>;
  });
};
