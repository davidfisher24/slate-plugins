/** @jsx jsx */

import { MARK_BOLD, MARK_ITALIC } from '@insendi/editor-v2-basic-marks';
import { getToggleMarkOnKeyDown } from '@insendi/editor-v2-common';
import { jsx } from '@insendi/editor-v2-test-utils';
import * as isHotkey from 'is-hotkey';
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
      t<htext bold>est</htext>
    </hp>
    <selection>
      <anchor path={[0, 1]} offset={0} />
      <focus path={[0, 1]} offset={3} />
    </selection>
  </editor>
) as any;

const editor = createEditorPlugins({
  editor: input,
  plugins: [createBoldPlugin()],
  options: { bold: { hotkey: 'ctrl+b' } },
});

it('should be', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);

  getToggleMarkOnKeyDown(MARK_BOLD)?.(editor)(event as any);
  expect(editor.children).toEqual(output.children);
  expect(editor.selection).toEqual(output.selection);
});
