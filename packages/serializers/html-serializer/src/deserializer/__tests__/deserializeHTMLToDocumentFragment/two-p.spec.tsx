/** @jsx jsx */

import { PlatePlugin } from '@insendi/editor-v2-core';
import { getHtmlDocument, jsx } from '@insendi/editor-v2-test-utils';
import { createParagraphPlugin } from '../../../../../../elements/paragraph/src/createParagraphPlugin';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import { deserializeHTMLToDocumentFragment } from '../../utils/deserializeHTMLToDocumentFragment';

const html = '<p>first</p><p>second</p>';
// eslint-disable-next-line react-hooks/rules-of-hooks
const input1: PlatePlugin[] = [createParagraphPlugin()];
const input2 = getHtmlDocument(html).body;

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
      element: input2,
    })
  ).toEqual(output);
});
