/** @jsx jsx */

import { withInlineVoid } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { withReact } from 'slate-react';
import { pipe } from '../../../../editor-v2/src/pipe/pipe';
import { ELEMENT_MENTION } from '../defaults';

jsx;

const input = (
  <editor>
    <hp>
      <cursor />
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hp>
      <htext />
      <element type="mention" mentionable={{ value: 'Count Duku' }}>
        <htext />
      </element>
      <htext />
    </hp>
  </editor>
) as any;

it('should insert mention', () => {
  const editor = pipe(
    input,
    withReact,
    withInlineVoid({
      inlineTypes: [ELEMENT_MENTION],
      voidTypes: [ELEMENT_MENTION],
    })
  );

  editor.insertNode({
    type: 'mention',
    mentionable: { value: 'Count Duku' },
    children: [{ text: '' }],
  });

  expect(input.children).toEqual(output.children);
});
