import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { getCodeLineElementStyles } from './CodeLineElement.styles';

export const CodeLineElement = (props: StyledElementProps) => {
  const { attributes, children } = props;

  const { root } = getCodeLineElementStyles(props);

  return (
    <div {...attributes} css={root.css} className={root.className}>
      {children}
    </div>
  );
};
