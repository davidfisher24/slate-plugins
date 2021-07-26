/** @jsx jsx */

import { MARK_BOLD } from '@insendi/editor-v2-basic-marks';
import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { jsx } from '@insendi/editor-v2-test-utils';
import { createBoldPlugin } from '../../../../../marks/basic-marks/src/bold/createBoldPlugin';
import { createEditorPlugins } from '../../../../../editor-v2/src/utils/createEditorPlugins';

jsx;

const input = (
  <editor>
    <hp>
      t<anchor />
      est
      <focus />
    </hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown') as any;

const output = (
  <editor>
    <hp>
      t<anchor />
      est
      <focus />
    </hp>
  </editor>
) as any;

const editor = createEditorPlugins({
  editor: input,
  plugins: [createBoldPlugin()],
  options: { bold: { hotkey: 'enter' } },
});

it('should be', () => {
  getToggleMarkOnKeyDown(MARK_BOLD)?.(editor)(event as any);
  expect(editor.children).toEqual(output.children);
  expect(editor.selection).toEqual(output.selection);
});
