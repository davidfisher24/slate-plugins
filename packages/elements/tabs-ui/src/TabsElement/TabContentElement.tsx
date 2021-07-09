import * as React from 'react';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { getTabContentElementStyles } from './TabContentElement.styles';
import {
  TabContentElementStyleProps,
  TabContentElementStyleSet,
} from './TabContentElement.types';

const getClassNames = getRootClassNames<
  TabContentElementStyleProps,
  TabContentElementStyleSet
>();

/**
 * TabContentElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabContentElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  nodeProps,
}: StyledElementProps) => {
  const { active } = element;

  const classNames = getClassNames(styles, {
    className,
    // Other style props
  });

  if (!active) return null;

  return (
    <div {...attributes} className={classNames.root} {...nodeProps}>
      {children}
    </div>
  );
};

/**
 * TabContentElement
 */
export const TabContentElement = styled<
  StyledElementProps,
  ClassName,
  RootStyleSet
>(TabContentElementBase, getTabContentElementStyles, undefined, {
  scope: 'TabContentElement',
});
