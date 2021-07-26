/** @jsx jsx */

import { SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';

jsx;

export const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as SPEditor;

export const output = (
  <editor>
    <hh1>
      test
      <cursor />
    </hh1>
  </editor>
) as any;
