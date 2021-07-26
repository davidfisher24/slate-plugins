import { RangeBeforeOptions } from '@insendi/editor-v2-common';

export interface LinkNodeData {
  url: string;
}

export interface WithLinkOptions {
  /**
   * Allow custom config for rangeBeforeOptions.
   */
  rangeBeforeOptions?: RangeBeforeOptions;

  /**
   * Callback to validate an url.
   */
  isUrl?: (text: string) => boolean;
}
