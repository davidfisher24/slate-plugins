/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor, Range } from 'slate';
import { isWordAfterTrigger } from '../../../queries/index';

jsx;

const input = ((
  <editor>
    <hp>
      @ test
      <cursor /> test2
    </hp>
  </editor>
) as any) as Editor;

const at = Range.start(input.selection as Range);

it('should be', () => {
  expect(isWordAfterTrigger(input, { at, trigger: '@' }).match).toBeNull();
});
