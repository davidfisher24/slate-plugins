import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { getTabsElementStyles } from './TabsElement.styles';

/**
 * TabsElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabsElement = (props: StyledElementProps) => {
  const { root } = getTabsElementStyles(props);

  const {
    attributes,
    children,
    nodeProps,
  } = props;

  return (
    <div {...attributes} className={root.className} css={root.css} {...nodeProps}>
      <div>{children}</div>
    </div>
  );
};
