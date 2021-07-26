/** @jsx jsx */

import { PlatePlugin } from '@insendi/editor-v2-core';
import { getHtmlDocument, jsx } from '@insendi/editor-v2-test-utils';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import { deserializeHTMLToDocumentFragment } from '../../utils/deserializeHTMLToDocumentFragment';

const html = 'test';
const input1: PlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <fragment>
    <htext>test</htext>
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
