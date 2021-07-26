/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { MARK_BOLD } from '../../../../../marks/basic-marks/src/bold/defaults';
import { toggleMark } from '../../../transforms/toggleMark';

jsx;

const input = (
  <editor>
    <hp>
      tes
      <htext bold>t</htext>
    </hp>
    <selection>
      <anchor path={[0, 1]} offset={0} />
      <focus path={[0, 1]} offset={1} />
    </selection>
  </editor>
) as any;

const output = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

it('should be', () => {
  toggleMark(input, MARK_BOLD);
  expect(input.children).toEqual(output.children);
});
