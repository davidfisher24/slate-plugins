import * as React from 'react';
import { LinkNodeData } from '@insendi/editor-v2-link';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { getLinkElementStyles } from './LinkElement.styles';

export const LinkElement = (props: StyledElementProps<LinkNodeData>) => {
  const { attributes, children, element, nodeProps } = props;

  const { root } = getLinkElementStyles(props);

  return (
    <a
      {...attributes}
      href={element.url}
      css={root.css}
      className={root.className}
      {...nodeProps}
    >
      {children}
    </a>
  );
};
