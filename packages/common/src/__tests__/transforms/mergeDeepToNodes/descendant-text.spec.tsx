/** @jsx jsx */

import { isDescendant } from '@insendi/editor-v2-core';
import { jsx } from '@insendi/editor-v2-test-utils';
import { mergeDeepToNodes } from '../../../transforms/index';

jsx;

const node = (<htext>test</htext>) as any;

const props = { a: 1 };

const output = (<htext a={1}>test</htext>) as any;

it('should set props to the text node', () => {
  mergeDeepToNodes({
    node,
    source: props,
    query: {
      filter: ([n]) => isDescendant(n),
    },
  });
  expect(node).toEqual(output);
});
