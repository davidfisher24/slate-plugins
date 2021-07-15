import * as React from 'react';
import {
  getRootClassNames,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { getMultiHighlightElementStyles } from './MultiHighlightElement.styles';
import {
  MultiHighLightElementStyleProps,
  MultiHighLightElementStyleSet,
  MultiHighLightElementProps
} from './MultiHighlightElement.types';


const getClassNames = getRootClassNames<
  MultiHighLightElementStyleProps,
  MultiHighLightElementStyleSet
>();

export const MultiHighlightElementBase = ({
  attributes,
  children,
  leaf,
  className,
  styles,
  nodeProps,
  as: Tag = 'span',
}: MultiHighLightElementProps) => {

  const color = leaf['multi-highlight']
  const classNames = getClassNames(styles, {
    className,
    color,
  });
  
  return (
    <Tag {...attributes} className={classNames.root} {...nodeProps}>
      {children}
    </Tag>
  );
};

export const MultiHighlightElement = styled<
  MultiHighLightElementProps,
  MultiHighLightElementStyleProps,
  MultiHighLightElementStyleSet
>(MultiHighlightElementBase, getMultiHighlightElementStyles, undefined, {
  scope: 'MultiHighlightElement',
});
