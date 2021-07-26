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

const output = {
  offset: 3,
  path: [0, 0],
};

it('should be', () => {
  expect(
    getPointBefore(input, input.selection as any, {
      match: () => true,
      unit: 'offset',
      afterMatch: true,
    })
  ).toEqual(output);
});
