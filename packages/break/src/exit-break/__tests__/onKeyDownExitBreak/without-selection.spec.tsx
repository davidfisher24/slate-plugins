/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import * as isHotkey from 'is-hotkey';
import { getExitBreakOnKeyDown } from '../../getExitBreakOnKeyDown';

jsx;

const input = (
  <editor>
    <hp>test</hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown') as any;

const output = (
  <editor>
    <hp>test</hp>
  </editor>
) as any;

it('should be', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);
  getExitBreakOnKeyDown({
    rules: [{ hotkey: 'mod+enter', level: 0, before: true }],
  })(input)(event);
  expect(input.children).toEqual(output.children);
});
