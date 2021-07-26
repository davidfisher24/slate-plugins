/** @jsx jsx */
import { act, renderHook } from '@testing-library/react-hooks';
import { withPlate } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { pipe } from '../../../../../../editor-v2/src/pipe/pipe';
import { useMentionPlugin } from '../../../useMentionPlugin';

jsx;

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

it('should do nothing', () => {
  const editor = pipe(input, withPlate());

  const { result } = renderHook(() => useMentionPlugin());

  act(() => {
    result.current.plugin.onChange?.(editor)([]);
  });

  expect(result.current.getMentionSelectProps().valueIndex).toBe(0);
});
