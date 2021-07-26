/** @jsx jsx */
import { PlatePlugin, SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { ReactEditor } from 'slate-react';
import { createMediaEmbedPlugin } from '../../../../../../elements/media-embed/src/createMediaEmbedPlugin';
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
  getData: () => '<html><body><iframe>inserted</iframe></body></html>',
};

const output = (
  <editor>
    <hp>
      testinserted
      <cursor />
    </hp>
  </editor>
) as any;

describe('when inserting an iframe', () => {
  it('should do nothing', () => {
    const plugins: PlatePlugin<ReactEditor & SPEditor>[] = [
      createMediaEmbedPlugin(),
    ];
    plugins.push(createDeserializeHTMLPlugin({ plugins }));

    const editor = createEditorPlugins({
      editor: input,
      plugins,
    });

    editor.insertData(data as any);

    expect(editor.children).toEqual(output.children);
  });
});
