import {
    findNode,
    setNodes,
    insertNodes,
  } from '@insendi/editor-v2-common';
  import { TElement } from '@insendi/editor-v2-core';
  import { ELEMENT_CODE_BLOCK } from '../defaults';
  import { Transforms } from 'slate';
  import { ReactEditor } from 'slate-react'
  
  export const changeCodeBlockLanguage = (
      editor: ReactEditor,
      element: TElement,
      language: string
  ) => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);

    if (!findNode(editor, {
      at:path,
      match: { type: ELEMENT_CODE_BLOCK }
    })) return;

    // TODO:
    // In order to decorate with new language highlighting, code lines need to be
    // rerendererd. The decoration only works at render time.
    // Currently this is done by removing and reinserting the node with the new
    // language applied. This should be improved.

    // Change language on code block Node
    setNodes<TElement>(
      editor, { language }, { at: path }
    );

    // select a copy of codeblock node
    const codeBlock = findNode<TElement>(editor, {
      at:path,
      match: { type: ELEMENT_CODE_BLOCK }
    })
    if (codeBlock) {
      const [el] = codeBlock;
      // remove and reinsert code block
      Transforms.removeNodes(editor, { at: path });
      insertNodes<TElement>(
        editor,
        el,
        {
          at: path,
        }
      );
    }
  };
  