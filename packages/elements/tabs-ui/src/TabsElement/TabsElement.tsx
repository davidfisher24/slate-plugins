import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
/**
 * TabsElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabsElement = (props: StyledElementProps) => {
  const { attributes, children } = props;

  return <div {...attributes}>{children}</div>;
};
