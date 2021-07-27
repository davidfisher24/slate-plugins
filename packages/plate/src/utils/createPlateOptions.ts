import {
  ELEMENT_ALIGN_CENTER,
  ELEMENT_ALIGN_JUSTIFY,
  ELEMENT_ALIGN_LEFT,
  ELEMENT_ALIGN_RIGHT,
} from '@insendi/editor-v2-alignment';
import {
  DEFAULTS_BOLD,
  DEFAULTS_CODE,
  DEFAULTS_ITALIC,
  DEFAULTS_STRIKETHROUGH,
  DEFAULTS_SUBSCRIPT,
  DEFAULTS_SUPERSCRIPT,
  DEFAULTS_UNDERLINE,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@insendi/editor-v2-basic-marks';
import {
  DEFAULTS_BLOCKQUOTE,
  ELEMENT_BLOCKQUOTE,
} from '@insendi/editor-v2-block-quote';
import {
  DEFAULTS_CODE_BLOCK,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
} from '@insendi/editor-v2-code-block';
import { PlatePluginOptions } from '@insendi/editor-v2-core';
import { MARK_SEARCH_HIGHLIGHT } from '@insendi/editor-v2-find-replace';
import {
  DEFAULTS_H1,
  DEFAULTS_H2,
  DEFAULTS_H3,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@insendi/editor-v2-heading';
import { DEFAULTS_HIGHLIGHT, MARK_HIGHLIGHT } from '@insendi/editor-v2-highlight';
import { ELEMENT_IMAGE } from '@insendi/editor-v2-image';
import { MARK_KBD } from '@insendi/editor-v2-kbd';
import { ELEMENT_LINK } from '@insendi/editor-v2-link';
import {
  DEFAULTS_TODO_LIST,
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_TODO_LI,
  ELEMENT_UL,
} from '@insendi/editor-v2-list';
import { ELEMENT_MEDIA_EMBED } from '@insendi/editor-v2-media-embed';
import { ELEMENT_MENTION } from '@insendi/editor-v2-mention';
import {
  DEFAULTS_PARAGRAPH,
  ELEMENT_PARAGRAPH,
} from '@insendi/editor-v2-paragraph';
import {
  DEFAULTS_TD,
  DEFAULTS_TH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TR,
} from '@insendi/editor-v2-table';

export type DefaultPlatePluginKey =
  | typeof ELEMENT_ALIGN_CENTER
  | typeof ELEMENT_ALIGN_JUSTIFY
  | typeof ELEMENT_ALIGN_LEFT
  | typeof ELEMENT_ALIGN_RIGHT
  | typeof ELEMENT_BLOCKQUOTE
  | typeof ELEMENT_CODE_BLOCK
  | typeof ELEMENT_CODE_LINE
  | typeof ELEMENT_H1
  | typeof ELEMENT_H2
  | typeof ELEMENT_H3
  | typeof ELEMENT_H4
  | typeof ELEMENT_H5
  | typeof ELEMENT_H6
  | typeof ELEMENT_IMAGE
  | typeof ELEMENT_LI
  | typeof ELEMENT_LINK
  | typeof ELEMENT_MEDIA_EMBED
  | typeof ELEMENT_MENTION
  | typeof ELEMENT_OL
  | typeof ELEMENT_PARAGRAPH
  | typeof ELEMENT_TABLE
  | typeof ELEMENT_TD
  | typeof ELEMENT_TH
  | typeof ELEMENT_TODO_LI
  | typeof ELEMENT_TR
  | typeof ELEMENT_UL
  | typeof MARK_BOLD
  | typeof MARK_CODE
  | typeof MARK_HIGHLIGHT
  | typeof MARK_ITALIC
  | typeof MARK_KBD
  | typeof MARK_SEARCH_HIGHLIGHT
  | typeof MARK_STRIKETHROUGH
  | typeof MARK_SUBSCRIPT
  | typeof MARK_SUPERSCRIPT
  | typeof MARK_UNDERLINE;

/**
 * Get plate options.
 * @param overrides merge into the default options
 */
export const createPlateOptions = <T extends string = string>(
  overrides?: Partial<
    Record<DefaultPlatePluginKey | T, Partial<PlatePluginOptions>>
  >
) => {
  const options: Record<DefaultPlatePluginKey, Partial<PlatePluginOptions>> = {
    [ELEMENT_ALIGN_CENTER]: {},
    [ELEMENT_ALIGN_JUSTIFY]: {},
    [ELEMENT_ALIGN_LEFT]: {},
    [ELEMENT_ALIGN_RIGHT]: {},
    [ELEMENT_BLOCKQUOTE]: DEFAULTS_BLOCKQUOTE,
    [ELEMENT_CODE_BLOCK]: DEFAULTS_CODE_BLOCK,
    [ELEMENT_CODE_LINE]: {},
    [ELEMENT_H1]: DEFAULTS_H1,
    [ELEMENT_H2]: DEFAULTS_H2,
    [ELEMENT_H3]: DEFAULTS_H3,
    [ELEMENT_H4]: {},
    [ELEMENT_H5]: {},
    [ELEMENT_H6]: {},
    [ELEMENT_IMAGE]: {},
    [ELEMENT_LI]: {},
    [ELEMENT_LINK]: {},
    [ELEMENT_MEDIA_EMBED]: {},
    [ELEMENT_MENTION]: {},
    [ELEMENT_OL]: {},
    [ELEMENT_PARAGRAPH]: DEFAULTS_PARAGRAPH,
    [ELEMENT_TABLE]: {},
    [ELEMENT_TD]: DEFAULTS_TD,
    [ELEMENT_TH]: DEFAULTS_TH,
    [ELEMENT_TODO_LI]: DEFAULTS_TODO_LIST,
    [ELEMENT_TR]: {},
    [ELEMENT_UL]: {},
    [MARK_BOLD]: DEFAULTS_BOLD,
    [MARK_CODE]: DEFAULTS_CODE,
    [MARK_HIGHLIGHT]: DEFAULTS_HIGHLIGHT,
    [MARK_ITALIC]: DEFAULTS_ITALIC,
    [MARK_KBD]: {},
    [MARK_SEARCH_HIGHLIGHT]: {},
    [MARK_STRIKETHROUGH]: DEFAULTS_STRIKETHROUGH,
    [MARK_SUBSCRIPT]: DEFAULTS_SUBSCRIPT,
    [MARK_SUPERSCRIPT]: DEFAULTS_SUPERSCRIPT,
    [MARK_UNDERLINE]: DEFAULTS_UNDERLINE,
  };

  if (overrides) {
    Object.keys(overrides).forEach((key) => {
      options[key] = overrides[key];
    });
  }

  Object.keys(options).forEach((key) => {
    if (!options[key].type) {
      options[key].type = key;
    }
  });

  return options as Record<DefaultPlatePluginKey | T, PlatePluginOptions>;
};
