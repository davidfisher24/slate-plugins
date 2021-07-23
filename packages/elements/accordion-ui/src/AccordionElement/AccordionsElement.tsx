import * as React from 'react';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { getAccordionsElementStyles } from './AccordionsElement.styles';

const getClassNames = getRootClassNames();

/**
 * AccordionsElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const AccordionsElementBase = ({
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
 * AccordionsElement
 */
export const AccordionsElement = styled<StyledElementProps, ClassName, RootStyleSet>(
  AccordionsElementBase,
  getAccordionsElementStyles,
  undefined,
  {
    scope: 'AccordionsElement',
  }
);
