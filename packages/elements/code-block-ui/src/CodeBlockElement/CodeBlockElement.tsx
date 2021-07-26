import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { getCodeBlockElementStyles } from './CodeBlockElement.styles';

export const CodeBlockElement = (props: StyledElementProps) => {
  const { attributes, children, nodeProps } = props;

  const { root } = getCodeBlockElementStyles(props);

  return (
    <pre
      {...attributes}
      css={root.css}
      className={root.className}
      {...nodeProps}
    >
      <code>{children}</code>
    </pre>
  );
};
