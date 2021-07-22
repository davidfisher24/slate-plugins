import * as React from 'react';
import {
  ClassName,
  getRootClassNames,
  RootStyleSet,
  StyledElementProps,
} from '@udecode/slate-plugins-ui-fluent';
import { useEditorRef } from '@udecode/slate-plugins-core';
import { Node, NodeEntry } from 'slate'
import copy from "copy-to-clipboard";
import { changeCodeBlockLanguage } from '@udecode/slate-plugins-code-block';
import { styled } from '@uifabric/utilities';
import { getCodeBlockElementStyles } from './CodeBlockElement.styles';
import { CodeBlockLanguageSelector } from './CodeBlockLanguageSelector';


const getClassNames = getRootClassNames();

interface CodeBlockNodeData {
  language?: string;
}

/**
 *   CodeBlockElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const CodeBlockElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  nodeProps,
}: StyledElementProps) => {
  const classNames = getClassNames(styles, {
    className,
    // Other style props
  });

  const editor = useEditorRef();
  const { language } = element;
  const texts: NodeEntry<any>[] = Array.from(Node.texts(element))
  const textToCopy: string = texts.map(([n]) => n.text).join('\n');
  const copytext = () => copy(textToCopy)

  return (
    <div style={{ position: 'relative'}}>
      <pre 
        {...attributes} 
        className={classNames.root} 
        {...nodeProps}
      >
        <code>{children}</code>
      </pre>
      <button onClick={copytext} >
        copy
      </button>
      <CodeBlockLanguageSelector 
        language={language}
        handleLanguageChange={(language: string) => 
          changeCodeBlockLanguage(editor, element, language)
        }
      />
    </div>
  );
};

/**
 * CodeBlockElement
 */
export const CodeBlockElement = styled<
  StyledElementProps,
  ClassName,
  RootStyleSet
>(CodeBlockElementBase, getCodeBlockElementStyles, undefined, {
  scope: 'CodeBlockElement',
});
