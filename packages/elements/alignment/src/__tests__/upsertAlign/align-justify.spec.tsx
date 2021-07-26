/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { ELEMENT_ALIGN_JUSTIFY } from '../../defaults';
import { upsertAlign } from '../../transforms/upsertAlign';

jsx;

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const output = ((
  <editor>
    <hjustify>
      <hp>test</hp>
    </hjustify>
  </editor>
) as any) as Editor;

it('should align center', () => {
  upsertAlign(input, { type: ELEMENT_ALIGN_JUSTIFY });

  expect(input.children).toEqual(output.children);
});
