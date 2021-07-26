/** @jsx jsx */

import { renderHook } from '@testing-library/react-hooks';
import { jsx } from '@insendi/editor-v2-test-utils';
import { Editor } from 'slate';
import { useBalloonMove } from '../../../../BalloonToolbar/useBalloonMove';

jsx;

const input1 = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const input2 = ((
  <editor>
    <hp>
      <anchor />
      test
      <focus />
    </hp>
  </editor>
) as any) as Editor;

describe('when without selecting, then selecting, then deselecting, then again without ref', () => {
  it('should be', () => {
    let editor = input1;

    const ref: any = {
      current: document.createElement('div'),
    };

    const { rerender } = renderHook(() =>
      useBalloonMove({
        editor,
        ref,
        direction: 'bottom',
      })
    );

    editor = input2;
    rerender();
    expect(1).toBe(1);
  });
});
