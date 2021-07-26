/** @jsx jsx */

import { withInlineVoid } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { ELEMENT_LINK } from '../../defaults';
import { upsertLinkAtSelection } from '../../transforms/upsertLinkAtSelection';
import { withLink } from '../../withLink';

jsx;

const urlInput = 'http://input.com';

const input = (
  <editor>
    <hp>
      insert link <anchor />
      <element type={ELEMENT_LINK} url={urlInput}>
        here
      </element>
      <focus />.
    </hp>
  </editor>
) as any;

const urlOutput = 'http://output.com';

const output = (
  <editor>
    <hp>
      insert link{' '}
      <element type={ELEMENT_LINK} url={urlOutput}>
        here
      </element>
      .
    </hp>
  </editor>
) as any;

it('should run default insertText', () => {
  const editor = withLink()(
    withInlineVoid({ inlineTypes: [ELEMENT_LINK] })(input)
  );
  upsertLinkAtSelection(editor, { url: urlOutput });

  expect(input.children).toEqual(output.children);
});
