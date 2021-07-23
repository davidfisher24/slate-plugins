import * as React from 'react';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { getAccordionBodyElementStyles } from './AccordionBodyElement.styles';
import {
  AccordionBodyElementStyleProps,
  AccordionBodyElementStyleSet,
} from './AccordionBodyElement.types';

const getClassNames = getRootClassNames<
  AccordionBodyElementStyleProps,
  AccordionBodyElementStyleSet
>();

/**
 * AccordionBodyElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const AccordionBodyElementBase = ({
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
 * AccordionBodyElement
 */
export const AccordionBodyElement = styled<
  StyledElementProps,
  ClassName,
  RootStyleSet
>(AccordionBodyElementBase, getAccordionBodyElementStyles, undefined, {
  scope: 'AccordionBodyElement',
});
