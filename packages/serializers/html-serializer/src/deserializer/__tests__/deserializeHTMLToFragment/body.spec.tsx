/** @jsx jsx */

import { jsx } from '@insendi/editor-v2-test-utils';
import { deserializeHTMLToFragment } from '../../utils/deserializeHTMLToFragment';

jsx;

const fragment = (
  <fragment>
    <hp>
      <htext>test</htext>
    </hp>
  </fragment>
);

const input = {
  element: document.createElement('body'),
  children: fragment,
} as any;

const output = fragment;

it('should be', () => {
  expect(deserializeHTMLToFragment(input)).toEqual(output);
});
