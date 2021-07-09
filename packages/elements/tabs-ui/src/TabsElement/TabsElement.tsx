import * as React from 'react';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { getTabsElementStyles } from './TabsElement.styles';

const getClassNames = getRootClassNames();

/**
 * TabsElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabsElementBase = ({
  attributes,
  children,
  className,
  styles,
  nodeProps,
}: StyledElementProps) => {
  const classNames = getClassNames(styles, {
    className,
  });

  return (
    <div {...attributes} className={classNames.root} {...nodeProps}>
      <div>{children}</div>
    </div>
  );
};

/**
 * TabsElement
 */
export const TabsElement = styled<StyledElementProps, ClassName, RootStyleSet>(
  TabsElementBase,
  getTabsElementStyles,
  undefined,
  {
    scope: 'TabsElement',
  }
);
