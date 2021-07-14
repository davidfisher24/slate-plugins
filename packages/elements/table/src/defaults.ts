import { SlatePluginOptions } from '@udecode/slate-plugins-core';

export const ELEMENT_TABLE = 'table';
export const ELEMENT_TH = 'table_head';
export const ELEMENT_TR = 'table_row';
export const ELEMENT_TD = 'table_cell';

export const KEYS_TABLE = [ELEMENT_TABLE, ELEMENT_TH, ELEMENT_TR, ELEMENT_TD];

export const DEFAULTS_TH: Partial<SlatePluginOptions> = {
  getNodeProps: ({ element }) => ({
    colSpan: element?.attributes?.colspan,
    rowSpan: element?.attributes?.rowspan,
  }),
};

export const DEFAULTS_TD: Partial<SlatePluginOptions> = {
  getNodeProps: ({ element }) => ({
    colSpan: element?.attributes?.colspan,
    rowSpan: element?.attributes?.rowspan,
  }),
};
