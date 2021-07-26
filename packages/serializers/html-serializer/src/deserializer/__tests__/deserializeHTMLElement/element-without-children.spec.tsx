/** @jsx jsx */

import { getElementDeserializer } from '@insendi/editor-v2-common';
import { PlatePlugin } from '@insendi/editor-v2-core';
import { getHtmlDocument, jsx } from '@insendi/editor-v2-test-utils';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import { deserializeHTMLElement } from '../../utils/deserializeHTMLElement';

const html =
  '<html><body><div class="poll" data-id="456"><ul><li>Question 1</li><li>Question 2</li></ul></div></body></html>';
const element = getHtmlDocument(html).body;

const input = {
  plugins: [
    {
      deserialize: () => ({
        element: getElementDeserializer({
          type: 'poll',
          getNode: (el) => ({
            type: 'poll',
            id: el.getAttribute('data-id'),
          }),
          rules: [{ className: 'poll' }],
          withoutChildren: true,
        }),
      }),
    },
  ] as PlatePlugin[],
  element,
};

const output = (
  <editor>
    <element type="poll" id="456">
      <htext />
    </element>
  </editor>
) as any;

it('should include named attributes', () => {
  expect(deserializeHTMLElement(createEditorPlugins(), input)).toEqual(
    output.children
  );
});
