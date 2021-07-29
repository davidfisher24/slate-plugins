import * as React from 'react';
import { useEditorRef } from '@insendi/editor-v2-core';
import { setActiveTab } from '@insendi/editor-v2-tabs';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { ReactEditor, useReadOnly } from 'slate-react';
import { Transforms } from 'slate';
import { getTabElementStyles } from './TabElement.styles';
import { Tab, TabLink } from '@insendi/ui-kit';
/**
 * TabsListElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabElement = (props: StyledElementProps) => {
  const editor = useEditorRef();
  const readOnly = useReadOnly();
  const { root } = getTabElementStyles(props);

  const {
    attributes,
    children,
    element,
  } = props;

  const { active } = element;

  return (
    <Tab
      {...attributes}
      isActive={active}
      className={root.className}
      onMouseDown={(event: any) => {
        event.stopPropagation();
        if (active && readOnly) {
          return;
        }
        const path = ReactEditor.findPath(editor, element);
        const [newActiveIndex] = path.slice(-1);
        setActiveTab(editor, newActiveIndex);

        Transforms.select(editor, path);
        /*Transforms.select(editor, {
          anchor: { path: [2,0,0,0,0], offset: 0 },
          focus: { path: [2,0,0,0,0], offset: 2 },
        })*/
      }}
    >
      <TabLink>
        <span className="is-family-secondary is-marginless">{children}</span>
      </TabLink>
    </Tab>
  );
};
