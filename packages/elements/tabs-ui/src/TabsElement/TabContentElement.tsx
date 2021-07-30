import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { TabContent } from '@insendi/ui-kit';

/**
 * TabContentElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */

export const TabContentElement = React.forwardRef(
  (props: StyledElementProps, ref) => {
    const { attributes, children, element } = props;

    const { active, id } = element;
    if (!active) return null;

    return (
      <div {...attributes}>
        <TabContent isActive={active} ref={ref} id={`tab-content-${id}}`}>
          {children}
        </TabContent>
      </div>
    );
  }
);
