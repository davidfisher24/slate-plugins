import * as React from 'react';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { getAccordionHeaderElementStyles } from './AccordionHeaderElement.styles';
import {
  AccordionHeaderElementStyleProps,
  AccordionHeaderElementStyleSet,
} from './AccordionHeaderElement.types';

const getClassNames = getRootClassNames<
  AccordionHeaderElementStyleProps,
  AccordionHeaderElementStyleSet
>();

/**
 * AccordionHeaderElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const AccordionHeaderElementBase = ({
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

  return (
    <div {...attributes} className={classNames.root} {...nodeProps}>
      {children}
    </div>
  );
};

/**
 * AccordionHeaderElement
 */
export const AccordionHeaderElement = styled<
  StyledElementProps,
  ClassName,
  RootStyleSet
>(AccordionHeaderElementBase, getAccordionHeaderElementStyles, undefined, {
  scope: 'AccordionHeaderElement',
});
