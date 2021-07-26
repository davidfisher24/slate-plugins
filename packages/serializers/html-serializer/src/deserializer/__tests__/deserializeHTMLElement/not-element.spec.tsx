/** @jsx jsx */

import { getHtmlDocument, jsx } from '@insendi/editor-v2-test-utils';
import { PlatePlugin } from '../../../../../../core/src/types/PlatePlugin/PlatePlugin';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import { deserializeHTMLElement } from '../../utils/deserializeHTMLElement';

const html = `<html><body>test<!-- You will not be able to see this text. --></body></html>`;
const input1: PlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <editor>
    <htext>test</htext>
  </editor>
) as any;

it('should not have the comment node', () => {
  expect(
    deserializeHTMLElement(createEditorPlugins(), {
      plugins: input1,
      element: input2,
    })
  ).toEqual(output.children);
});
