/** @jsx jsx */
import { act, renderHook } from '@testing-library/react-hooks';
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
) as any) as Editor;

it('should go down', () => {
  const editor = createEditorPlugins({
    editor: input,
  });

  const { result } = renderHook(() => useMentionPlugin({ mentionables }));

  act(() => {
    result.current.plugin.onChange?.(editor)([]);
  });

  act(() => {
    result.current.plugin.onKeyDown?.(editor)(
      new KeyboardEvent('keydown', { key: 'Escape' }) as any
    );
  });

  expect(result.current.getMentionSelectProps().at).toEqual(null);
});
