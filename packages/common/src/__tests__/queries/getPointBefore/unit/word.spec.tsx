/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { getPointBefore } from '../../../../queries/getPointBefore';

jsx;

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const output = { offset: 4, path: [0, 0] };

it('should be', () => {
  expect(
    getPointBefore(input, input.selection as any, {
      unit: 'word',
      afterMatch: true,
      matchString: 'test',
      skipInvalid: true,
    })
  ).toEqual(output);
});
