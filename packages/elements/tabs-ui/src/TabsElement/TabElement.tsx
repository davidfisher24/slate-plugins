import * as React from 'react';
import { useEditorRef } from '@insendi/editor-v2-core';
import { setActiveTab } from '@insendi/editor-v2-tabs';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { ReactEditor, useReadOnly } from 'slate-react';
import { getTabElementStyles } from './TabElement.styles';
/**
 * TabsListElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TabElement = (props: StyledElementProps) => {
  const editor = useEditorRef();
  const readOnly = useReadOnly();

  const {
    attributes,
    children,
    element,
    nodeProps,
  } = props;

  const { active } = element;

  const { root } = getTabElementStyles(props);

  return (
    <div>
      <div
        {...attributes}
        className={root.className}
        css={root.css}
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
