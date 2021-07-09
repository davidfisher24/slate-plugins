import * as React from 'react';
import { useEditorRef } from '@udecode/slate-plugins-core';
import { setActiveTab } from '@udecode/slate-plugins-tabs';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { ReactEditor, useReadOnly } from 'slate-react';
import { getTabElementStyles } from './TabElement.styles';
import {
  TabElementStyleProps,
  TabElementStyleSet,
} from './TabElement.types';

const getClassNames = getRootClassNames<
  TabElementStyleProps,
  TabElementStyleSet
>();

/**
 * TabsListElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  nodeProps,
}: StyledElementProps) => {
  const editor = useEditorRef();
  const readOnly = useReadOnly();

  const { active } = element;

  const classNames = getClassNames(styles, {
    className,
    // Other style props
    active,
  });

  return (
    <div>
      <div
        {...attributes}
        className={classNames.root}
        {...nodeProps}
        onMouseDown={(event) => {
          event.stopPropagation();
          if (readOnly) {
            event.preventDefault();
          }

          // We don't need to do anything on the same tab.
          if (active && readOnly) {
            return;
          }

          // This find path function isn't on the SP editor so type is any for the
          // editor. Probably this should be looking for a selecton in the editor(next tick)
          // there has to be a way to focus this
          const path = ReactEditor.findPath(editor, element);
          const [newActiveIndex] = path.slice(-1);
          setActiveTab(editor, newActiveIndex);
        }}
      >
        <div>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * TabsElement
 */
export const TabElement = styled<StyledElementProps, ClassName, RootStyleSet>(
  TabElementBase,
  getTabElementStyles,
  undefined,
  {
    scope: 'TabElement',
  }
);
