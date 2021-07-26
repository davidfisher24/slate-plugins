/** @jsx jsx */

import { isBlockAboveEmpty } from '@insendi/editor-v2-common';
import { SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import * as isHotkey from 'is-hotkey';
import { options } from '../../../../docs/src/live/config/pluginOptions';
import { ELEMENT_CODE_BLOCK } from '../../../elements/code-block/src/defaults';
import { getResetNodeOnKeyDown } from '../getResetNodeOnKeyDown';

jsx;

const input = ((
  <editor>
    <hcodeblock>
      <htext />
      <cursor />
    </hcodeblock>
  </editor>
) as any) as SPEditor;

const output = (
  <editor>
    <hp>
      <htext />
      <cursor />
    </hp>
  </editor>
) as any;

it('should render', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);

  getResetNodeOnKeyDown({
    rules: [
      {
        types: [ELEMENT_CODE_BLOCK],
        defaultType: options.p.type,
        hotkey: 'Enter',
        predicate: isBlockAboveEmpty,
      },
    ],
  })(input)(new KeyboardEvent('keydown') as any);

  expect(input.children).toEqual(output.children);
});
