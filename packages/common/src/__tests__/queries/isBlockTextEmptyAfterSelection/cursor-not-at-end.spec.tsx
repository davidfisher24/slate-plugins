/** @jsx jsx */

import { SPEditor, withInlineVoid } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { ELEMENT_LINK } from '../../../../../elements/link/src/defaults';
import { isBlockTextEmptyAfterSelection } from '../../../queries/isBlockTextEmptyAfterSelection';

jsx;

const input = ((
  <editor>
    <hp>
      <htext>first</htext>
      <ha>
        tes
        <cursor />t
      </ha>
      <htext />
    </hp>
  </editor>
) as any) as SPEditor;

const output = false;

it('should be', () => {
  expect(
    isBlockTextEmptyAfterSelection(
      withInlineVoid({ inlineTypes: [ELEMENT_LINK] })(input)
    )
  ).toEqual(output);
});
