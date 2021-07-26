/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor, Range } from 'slate';
import { isWordAfterTrigger } from '../../../queries/index';

jsx;

const input = ((
  <editor>
    <hp>
      @pré
      <cursor /> test2
    </hp>
  </editor>
) as any) as Editor;

const at = Range.start(input.selection as Range);

const output = 'pré';

it('should be', () => {
  expect(isWordAfterTrigger(input, { at, trigger: '@' }).match?.[1]).toBe(
    output
  );
});
