import * as React from 'react';
import { setNodes } from '@insendi/editor-v2-common';
import { TElement, useEditorRef } from '@insendi/editor-v2-core';
import { TodoListItemNodeData } from '@insendi/editor-v2-list';
import clsx from 'clsx';
import { ReactEditor, useReadOnly } from 'slate-react';
import { getTodoListElementStyles } from './TodoListElement.styles';
import { TodoListElementProps } from './TodoListElement.types';

export const TodoListElement = (props: TodoListElementProps) => {
  const { attributes, children, element, nodeProps } = props;

  const editor = useEditorRef();
  const readOnly = useReadOnly();

  const { checked } = element;

  const styles = getTodoListElementStyles({ ...props, checked });

  return (
    <div
      {...attributes}
      css={styles.root.css}
      className={clsx(styles.root.className, styles.rootChecked?.className)}
    >
      <div
        contentEditable={false}
        css={styles.checkboxWrapper?.css}
        className={styles.checkboxWrapper?.className}
      >
        <input
          data-testid="TodoListElementCheckbox"
          css={styles.checkbox?.css}
          className={styles.checkbox?.className}
          type="checkbox"
          checked={!!checked}
          onChange={(e) => {
            const path = ReactEditor.findPath(editor, element);

            setNodes<TElement<TodoListItemNodeData>>(
              editor,
              { checked: e.target.checked },
              {
                at: path,
              }
            );
          }}
          {...nodeProps}
        />
      </div>
      <span
        css={styles.text?.css}
        className={styles.text?.className}
        contentEditable={!readOnly}
        suppressContentEditableWarning
      >
        {children}
      </span>
    </div>
  );
};
