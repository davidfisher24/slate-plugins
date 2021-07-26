/** @jsx jsx */

import * as React from 'react';
import { SPEditor } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';

jsx;

export const input1 = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as SPEditor;

export const output1 = (
  <editor>
    <hp>test</hp>
    <himg url="https://i.imgur.com/removed.png">
      <htext />
      <cursor />
    </himg>
  </editor>
) as any;

export const input2 = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as SPEditor;

export const output2 = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;
