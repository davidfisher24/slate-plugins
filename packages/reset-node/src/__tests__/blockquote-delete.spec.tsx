/** @jsx jsx */

import { isSelectionAtBlockStart } from '@insendi/editor-v2-common';
import { SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import * as isHotkey from 'is-hotkey';
import { options } from '../../../../docs/src/live/config/pluginOptions';
import { ELEMENT_BLOCKQUOTE } from '../../../elements/block-quote/src/defaults';
import { getResetNodeOnKeyDown } from '../getResetNodeOnKeyDown';

jsx;

const input = ((
  <editor>
    <hblockquote>
      <cursor />
      test
    </hblockquote>
  </editor>
) as any) as SPEditor;

const output = (
  <editor>
    <hp>
      <cursor />
      test
    </hp>
  </editor>
) as any;

it('should render', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);

  getResetNodeOnKeyDown({
    rules: [
      {
        types: [ELEMENT_BLOCKQUOTE],
        defaultType: options.p.type,
        hotkey: 'Backspace',
        predicate: isSelectionAtBlockStart,
      },
    ],
  })(input)(new KeyboardEvent('keydown') as any);

  expect(input.children).toEqual(output.children);
});
