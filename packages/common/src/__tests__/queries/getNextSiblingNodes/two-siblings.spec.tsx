/** @jsx jsx */

import { SPEditor, withInlineVoid } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { Range } from 'slate';
import { ELEMENT_LINK } from '../../../../../elements/link/src/defaults';
import { getBlockAbove } from '../../../queries/getBlockAbove';
import { getNextSiblingNodes } from '../../../queries/getNextSiblingNodes';

jsx;

const input = ((
  <editor>
    <hp>
      <htext>first</htext>
      <ha>
        test
        <cursor />
      </ha>
      <htext />
      <htext>last</htext>
    </hp>
  </editor>
) as any) as SPEditor;

const output = [<htext />, <htext>last</htext>];

it('should be', () => {
  const above = getBlockAbove(
    withInlineVoid({ inlineTypes: [ELEMENT_LINK] })(input)
  ) as any;

  expect(
    getNextSiblingNodes(above, (input.selection as Range).anchor.path)
  ).toEqual(output);
});
