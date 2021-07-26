/** @jsx jsx */
import { act, renderHook } from '@testing-library/react-hooks';
import { SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { createEditorPlugins } from '../../../../../../../editor-v2/src/utils/createEditorPlugins';
import { useMentionPlugin } from '../../../../useMentionPlugin';
import { mentionables } from '../mentionables.fixture';

jsx;

const input = ((
  <editor>
    <hp>
      t1 @t2
      <cursor />
    </hp>
  </editor>
) as any) as SPEditor;

const output = ((
  <editor>
    <hp>
      t1{' '}
      <hmention value="t2">
        <htext />
      </hmention>
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

it('should go down', () => {
  const { result } = renderHook(() => useMentionPlugin({ mentionables }));

  const editor = createEditorPlugins({
    editor: input,
    plugins: [result.current.plugin],
  });

  act(() => {
    result.current.plugin.onChange?.(editor)([]);
  });

  act(() => {
    result.current.plugin.onKeyDown?.(editor)(
      new KeyboardEvent('keydown', { key: 'Enter' }) as any
    );
  });

  expect(editor.children).toEqual(output.children);
  act(() => {
    result.current.plugin.onChange?.(editor)([]);
  });
  expect(result.current.getMentionSelectProps().at).toEqual(null);
});
