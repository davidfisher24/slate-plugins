import { AnyObject, TElement } from '@insendi/editor-v2-core';

// Data of Element node
export interface TagNodeData extends AnyObject {
  value: string;
}

// Element node
export interface TagNode extends TElement<TagNodeData> {}
