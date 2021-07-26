/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { getRangeFromBlockStart } from '../../../queries/index';

jsx;

const input = ((
  <editor>
    <hp>
      te
      <cursor />
      st
    </hp>
  </editor>
) as any) as Editor;

const output: ReturnType<typeof getRangeFromBlockStart> = {
  anchor: { path: [0, 0], offset: 0 },
  focus: { path: [0, 0], offset: 2 },
};

it('should be', () => {
  expect(getRangeFromBlockStart(input)).toEqual(output);
});
