import * as React from 'react';
import { findDescendant, getText } from '@insendi/editor-v2-common';
import { useEditorRef } from '@insendi/editor-v2-core';
import { ELEMENT_PARAGRAPH } from '@insendi/editor-v2-plate';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { setActiveTab } from '@insendi/editor-v2-tabs';
import { Tab, TabLink } from '@insendi/ui-kit';
import { Transforms } from 'slate';
import { ReactEditor, useReadOnly } from 'slate-react';

/**
 * TabsListElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */

export const TabElement = React.forwardRef((props: StyledElementProps, ref) => {
  const editor = useEditorRef();
  const readOnly = useReadOnly();

  const { attributes, children, element } = props;

  const { active = false } = element;
  const path = ReactEditor.findPath(editor, element);

  return (
    <div {...attributes}>
      <Tab
        style={{ userSelect: 'none' }}
        isActive={active}
        ref={ref}
        onMouseDown={(event: any) => {
          event.stopPropagation();
          if (active && readOnly) {
            return;
          }
          const text = getText(editor, path);
          const [tabIndex] = path.slice(-1);
          setActiveTab(editor, tabIndex);

          const descendantText = findDescendant(editor, {
            at: path,
            match: {
              type: ELEMENT_PARAGRAPH,
            },
          });

          if (descendantText) {
            const [, textNodePath] = descendantText;
            Transforms.select(editor, {
              anchor: { path: textNodePath, offset: text.length },
              focus: { path: textNodePath, offset: text.length },
            });
          }
        }}
      >
        <TabLink ariaControls="" isActive={active}>
          <span className="is-family-secondary is-marginless">{children}</span>
        </TabLink>
      </Tab>
    </div>
  );
});
