/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { withReact } from 'slate-react';
import { optionsAutoformat } from '../../../../../../docs/src/live/config/autoformatRules';
import { withAutoformat } from '../../../createAutoformatPlugin';

jsx;

const input = (
  <editor>
    <hp>
      ~~hello~~
      <cursor />
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hp>
      <htext strikethrough>hello</htext>{' '}
    </hp>
  </editor>
) as any;

it('should autoformat', () => {
  const editor = withAutoformat(optionsAutoformat)(withReact(input));

  editor.insertText(' ');

  expect(input.children).toEqual(output.children);
});
