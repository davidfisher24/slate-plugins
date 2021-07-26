/** @jsx jsx */

import { pipe } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { withReact } from 'slate-react';
import { withImageUpload } from '../../withImageUpload';

jsx;

const input = (
  <editor>
    <hp>test</hp>
  </editor>
) as any;

const output = (
  <editor>
    <hp>test</hp>
  </editor>
) as any;

it('should insert image from the file(s)', () => {
  const editor = pipe(input, withReact, withImageUpload());

  const data = {
    getData: () => 'test',
    files: [
      new File(['test'], 'test.png', {
        type: 'image/png',
      }),
    ],
  };
  editor.insertData(data as any);

  expect(input.children).toEqual(output.children);
});

// it('should call uploadImage when provided', async () => {
//   const uploadSpy = jest.fn();
//   const editor = pipe(
//     input,
//     withReact,
//     withImageUpload({ uploadImage: uploadSpy })
//   );
//
//   const data = {
//     getData: () => 'test',
//     files: [
//       new File(['test'], 'test.png', {
//         type: 'image/png',
//       }),
//     ],
//   };
//   editor.insertData(data as any);
//
//   await new Promise((resolve) => setTimeout(resolve, 10));
//
//   expect(uploadSpy).toHaveBeenCalled();
// });
