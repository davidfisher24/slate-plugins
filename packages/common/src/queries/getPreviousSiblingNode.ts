import { TAncestor, TDescendant } from '@udecode/slate-plugins-core';
import { NodeEntry, Path } from 'slate';

/**
 * Get the previous sibling node before a path.
 * @param ancestorEntry Ancestor of the sibling nodes
 * @param path Path of the reference node
 */
export const getPreviousSiblingNode = (
  ancestorEntry: NodeEntry<TAncestor>,
  path: Path
) => {
  const [ancestor, ancestorPath] = ancestorEntry;

  const leafIndex = path[ancestorPath.length];
  
  if (leafIndex === 0 || ancestor.children.length < 2) {
      return null;
  }

  return ancestor.children.slice(0,leafIndex).pop()
};
