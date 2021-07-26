import { TElement } from '@insendi/editor-v2-core';
import { ELEMENT_PARAGRAPH } from '../../../../../elements/paragraph/src/defaults';
import { createNode } from '../../../utils/index';

const output: TElement = { type: ELEMENT_PARAGRAPH, children: [{ text: '' }] };

it('should be', () => {
  expect(createNode()).toEqual(output);
});
