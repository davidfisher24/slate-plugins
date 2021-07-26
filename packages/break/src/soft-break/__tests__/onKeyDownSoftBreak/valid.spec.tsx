/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import * as isHotkey from 'is-hotkey';
import { getSoftBreakOnKeyDown } from '../../getSoftBreakOnKeyDown';

jsx;

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown') as any;

const output = (
  <editor>
    <hp>
      test{'\n'}
      <cursor />
    </hp>
  </editor>
) as any;

it('should be', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);
  getSoftBreakOnKeyDown({ rules: [{ hotkey: 'shift+enter' }] })(input)(event);
  expect(input.children).toEqual(output.children);
});
