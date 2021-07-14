import { RangeBeforeOptions } from '@udecode/slate-plugins-common';

export interface LinkNodeData {
  href: string;
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
