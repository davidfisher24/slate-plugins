import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { Tabs, TabList } from '@insendi/ui-kit'; 

export const TabsListElement = React.forwardRef((props: StyledElementProps, ref) => { 

  const {
    attributes,
    children,
  } = props;

  return (
    <div {...attributes}>
      <Tabs ref={ref}>
        <TabList>{children}</TabList>
      </Tabs>
    </div>
  );
});
