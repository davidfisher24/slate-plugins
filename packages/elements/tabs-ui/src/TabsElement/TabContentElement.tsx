import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { getTabContentElementStyles } from './TabContentElement.styles';
import { TabContent } from '@insendi/ui-kit';

/**
 * TabContentElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabContentElement = (props: StyledElementProps) => {
  const {
    attributes,
    children,
    element,
  } = props;

  const { active } = element;

  const { root } = getTabContentElementStyles(props);

  if (!active) return null;

  return (
    <TabContent 
      {...attributes} 
      className={root.className}
      isActive={active}
    >
      {children}
    </TabContent>
  );
};
