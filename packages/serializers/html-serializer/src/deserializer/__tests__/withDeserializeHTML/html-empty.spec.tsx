/** @jsx jsx */
import { PlatePlugin, SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { ReactEditor } from 'slate-react';
import { createBoldPlugin } from '../../../../../../marks/basic-marks/src/bold/createBoldPlugin';
import { createEditorPlugins } from '../../../../../../editor-v2/src/utils/createEditorPlugins';
import { createDeserializeHTMLPlugin } from '../../createDeserializeHTMLPlugin';

jsx;

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

// noinspection CheckTagEmptyBody
const data = {
  getData: () => '<html></html>',
};

const output = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

describe('when inserting empty html', () => {
  it('should do nothing', () => {
    const plugins: PlatePlugin<ReactEditor & SPEditor>[] = [createBoldPlugin()];
    plugins.push(createDeserializeHTMLPlugin({ plugins }));
    const editor = createEditorPlugins({
      editor: input,
      plugins,
    });

    editor.insertData(data as any);

    expect(editor.children).toEqual(output.children);
  });
});
