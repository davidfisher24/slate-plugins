/** @jsx jsx */
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { isTextByPath } from '../../../queries/isTextByPath';

jsx;

const editor = ((
  <editor>
    <hp>test</hp>
  </editor>
) as any) as Editor;

const path = [0, 0];

const output = true;

it('should be', () => {
  expect(isTextByPath(editor, path)).toEqual(output);
});
