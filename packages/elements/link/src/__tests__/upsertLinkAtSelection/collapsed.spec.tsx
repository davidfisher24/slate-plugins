/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { upsertLinkAtSelection } from '../../transforms/upsertLinkAtSelection';
import { withLink } from '../../withLink';

jsx;

const input = (
  <editor>
    <hp>insert link</hp>
  </editor>
) as any;

const url = 'http://google.com';

const output = (
  <editor>
    <hp>insert link</hp>
  </editor>
) as any;

it('should run default insertText', () => {
  const editor = withLink()(input);
  upsertLinkAtSelection(editor, { url });

  expect(input.children).toEqual(output.children);
});
