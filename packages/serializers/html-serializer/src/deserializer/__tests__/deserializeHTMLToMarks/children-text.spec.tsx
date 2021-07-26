/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { createBoldPlugin } from '../../../../../../marks/basic-marks/src/bold/createBoldPlugin';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import {
  deserializeHTMLToMarks,
  DeserializeMarksProps,
} from '../../utils/deserializeHTMLToMarks';

jsx;

const input: DeserializeMarksProps = {
  plugins: [createBoldPlugin()],
  element: document.createElement('strong'),
  children: <fragment>test</fragment>,
} as any;

const output = (
  <fragment>
    <htext bold>test</htext>
  </fragment>
);

it('should be', () => {
  expect(deserializeHTMLToMarks(createEditorPlugins(), input as any)).toEqual(
    output
  );
});
