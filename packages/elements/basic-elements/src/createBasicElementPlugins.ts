/**
 * Enables support for basic elements:
 * - Block quote
 * - Code block
 * - Heading
 * - Paragraph
 */
import { createBlockquotePlugin } from '@insendi/editor-v2-block-quote';
import { createCodeBlockPlugin } from '@insendi/editor-v2-code-block';
import { PlatePlugin } from '@insendi/editor-v2-core';
import { createHeadingPlugin } from '@insendi/editor-v2-heading';
import { createParagraphPlugin } from '@insendi/editor-v2-paragraph';
import { BasicElementPluginsOptions } from './types';

export const createBasicElementPlugins = ({
  heading,
}: BasicElementPluginsOptions = {}): PlatePlugin[] => [
  createBlockquotePlugin(),
  createCodeBlockPlugin(),
  createHeadingPlugin(heading),
  createParagraphPlugin(),
];
