import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { getTabContentElementStyles } from './TabContentElement.styles';

/**
 * TabContentElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabContentElement = (props: StyledElementProps) => {
  const {
    attributes,
    children,
    element,
    nodeProps,
  } = props;

  const { active } = element;

  const { root } = getTabContentElementStyles(props);

  if (!active) return null;

  return (
    <div {...attributes} className={root.className} css={root.css} {...nodeProps}>
      {children}
    </div>
  );
};
