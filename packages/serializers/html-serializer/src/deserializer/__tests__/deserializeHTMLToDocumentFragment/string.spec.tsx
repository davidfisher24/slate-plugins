/* eslint-disable react-hooks/rules-of-hooks */
/** @jsx jsx */

import { PlatePlugin } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { createParagraphPlugin } from '../../../../../../elements/paragraph/src/createParagraphPlugin';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import { deserializeHTMLToDocumentFragment } from '../../utils/deserializeHTMLToDocumentFragment';

jsx;

const input1: PlatePlugin[] = [createParagraphPlugin()];

const output = (
  <fragment>
    <hp>first</hp>
    <hp>second</hp>
  </fragment>
) as any;

it('should have the break line', () => {
  expect(
    deserializeHTMLToDocumentFragment(createEditorPlugins(), {
      plugins: input1,
      element: '<p>first</p><p>second</p>',
    })
  ).toEqual(output);
});
