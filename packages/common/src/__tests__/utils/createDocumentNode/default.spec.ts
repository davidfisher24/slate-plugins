import { TDescendant } from '@insendi/editor-v2-core';
import { ELEMENT_PARAGRAPH } from '@insendi/editor-v2-paragraph';
import { createDocumentNode } from '../../../utils/index';

const output: TDescendant[] = [
  {
    children: [
      {
        type: ELEMENT_PARAGRAPH,
        children: [{ text: '' }],
      },
    ],
  },
];

it('should be', () => {
  expect(createDocumentNode()).toEqual(output);
});
