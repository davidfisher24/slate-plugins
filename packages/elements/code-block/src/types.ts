import { InsertNodesOptions } from '@insendi/editor-v2-common';
import { PlatePluginOptions } from '@insendi/editor-v2-core';

export interface WithCodeBlockOptions {
  /**
   * Valid children types for code_block, in addition to code_line types.
   */
  // validCodeBlockChildrenTypes?: string[];
}

export interface CodeBlockInsertOptions
  extends Pick<PlatePluginOptions, 'defaultType'> {
  level?: number;
  insertNodesOptions?: Omit<InsertNodesOptions, 'match'>;
}
