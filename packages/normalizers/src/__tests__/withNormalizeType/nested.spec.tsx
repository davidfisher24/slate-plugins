/** @jsx jsx */

import { SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { options } from '../../../../../docs/src/live/config/pluginOptions';
import { ELEMENT_PARAGRAPH } from '../../../../elements/paragraph/src/defaults';
import { withNormalizeTypes } from '../../createNormalizeTypesPlugin';

jsx;

const input = (
  <editor>
    <element />
  </editor>
) as any;

const output = (
  <editor>
    <element>
      <hh1>
        <htext />
      </hh1>
      <hp>
        <htext />
      </hp>
    </element>
  </editor>
) as any;

it('should be', () => {
  const editor = withNormalizeTypes({
    rules: [
      {
        path: [0, 0],
        strictType: options.h1.type,
      },
      { path: [0, 1], type: ELEMENT_PARAGRAPH },
    ],
  })(input as SPEditor);

  editor.normalizeNode([input, []]);

  expect(input.children).toEqual(output.children);
});
