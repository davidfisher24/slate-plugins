import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { getTabsListElementStyles } from './TabsListElement.styles';
import { Tabs, TabList } from '@insendi/ui-kit'; 



/**
 * TabsElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */

export const TabsListElement = (props: StyledElementProps) => {
  const { root } = getTabsListElementStyles(props);

  const {
    attributes,
    children,
  } = props;

  return (
    <Tabs {...attributes} className={root.className} >
        <TabList>{children}</TabList>
    </Tabs>
  );
};
