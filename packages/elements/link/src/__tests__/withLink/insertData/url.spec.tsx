/** @jsx jsx */

import { withInlineVoid } from '@udecode/slate-plugins-core';
import { jsx } from '@udecode/slate-plugins-test-utils';
import { withReact } from 'slate-react';
import { ELEMENT_LINK } from '../../../defaults';
import { withLink } from '../../../withLink';

jsx;

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

const data = { getData: () => 'http://google.com' };

const output = (
  <editor>
    <hp>
      test
      <element type="link" url="http://google.com">
        http://google.com
      </element>
      <htext />
    </hp>
  </editor>
) as any;

it('should run default insertText', () => {
  const editor = withLink()(
    withInlineVoid({ inlineTypes: [ELEMENT_LINK] })(withReact(input))
  );

  editor.insertData(data);

  expect(input.children).toEqual(output.children);
});
