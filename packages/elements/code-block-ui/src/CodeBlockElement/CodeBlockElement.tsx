import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { useEditorRef } from '@insendi/editor-v2-core';
import { Node, NodeEntry } from 'slate'
import copy from "copy-to-clipboard";
import { changeCodeBlockLanguage } from '@insendi/editor-v2-code-block';
import { getCodeBlockElementStyles } from './CodeBlockElement.styles';
import { CodeBlockLanguageSelector } from './CodeBlockLanguageSelector';
import { rootCertificates } from 'tls';

//const getClassNames = getRootClassNames();

interface CodeBlockNodeData {
  language?: string;
}

/**
 *   CodeBlockElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const CodeBlockElement = (props: StyledElementProps) => {
  /*const classNames = getClassNames(styles, {
    className,
  });*/
  const { attributes, children, element, nodeProps } = props;

  const editor = useEditorRef();
  const { language } = element;
  const texts: NodeEntry<any>[] = Array.from(Node.texts(element))
  const textToCopy: string = texts.map(([n]) => n.text).join('\n');
  const copytext = () => copy(textToCopy)

  const { root } = getCodeBlockElementStyles(props);

  return (
    <div style={{ position: 'relative'}}>
      <pre 
        {...attributes} 
        className={root.className} 
        css={root.css}
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
