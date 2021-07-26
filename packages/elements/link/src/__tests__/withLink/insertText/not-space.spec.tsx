/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { withReact } from 'slate-react';
import { withLink } from '../../../withLink';

jsx;

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

const text = 'test';

const output = (
  <editor>
    <hp>testtest</hp>
  </editor>
) as any;

describe('when inserting a character that is not a space', () => {
  it('should run default insertText', () => {
    const editor = withLink()(withReact(input));

    editor.insertText(text);

    expect(input.children).toEqual(output.children);
  });
});
