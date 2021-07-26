/** @jsx jsx */

import { PlatePlugin } from '@insendi/editor-v2-core';
import { getHtmlDocument, jsx } from '@insendi/editor-v2-test-utils';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import { deserializeHTMLElement } from '../../utils/deserializeHTMLElement';

jsx;

const editor = createEditorPlugins();

const html = `<html><body>test<br /></body></html>`;
const input1: PlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <editor>
    <htext>test{'\n'}</htext>
  </editor>
) as any;

it('should have the break line', () => {
  expect(
    deserializeHTMLElement(editor, {
      plugins: input1,
      element: input2,
    })
  ).toEqual(output.children);
});
