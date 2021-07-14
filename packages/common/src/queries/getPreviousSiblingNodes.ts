import { TAncestor, TDescendant } from '@udecode/slate-plugins-core';
import { NodeEntry, Path } from 'slate';

/**
 * Get the previous sibling nodes before a path.
 * @param ancestorEntry Ancestor of the sibling nodes
 * @param path Path of the reference node
 */
export const getPreviousSiblingNodes = (
  ancestorEntry: NodeEntry<TAncestor>,
  path: Path
) => {
  const [ancestor, ancestorPath] = ancestorEntry;

  const leafIndex = path[ancestorPath.length];
  
  const siblings: TDescendant[] = [];

  if (leafIndex !== 0) {
    for (let i = leafIndex - 1; i >= 0; i--) {
      siblings.push(ancestor.children[i]);
    }
  }

  return siblings;
};
