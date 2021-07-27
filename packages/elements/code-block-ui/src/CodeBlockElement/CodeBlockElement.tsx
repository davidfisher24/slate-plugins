import * as React from 'react';
import { StyledElementProps } from '@insendi/editor-v2-styled-components';
import { useEditorRef } from '@insendi/editor-v2-core';
import { Node, NodeEntry } from 'slate'
import { useReadOnly } from 'slate-react';
import copy from "copy-to-clipboard";
import { changeCodeBlockLanguage } from '@insendi/editor-v2-code-block';
import { getCodeBlockElementStyles } from './CodeBlockElement.styles';
import { CodeBlockLanguageSelector } from './CodeBlockLanguageSelector';
import { Button, Icon } from '@insendi/ui-kit';

/**
 * CodeBlockElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const CodeBlockElement = (props: StyledElementProps) => {
  const { attributes, children, element, nodeProps } = props;

  const editor = useEditorRef();
  const readOnly = useReadOnly();
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
      {!readOnly && (
        <CodeBlockLanguageSelector 
          language={language}
          handleLanguageChange={(language: string) => 
            changeCodeBlockLanguage(editor, element, language)
          }
        />
      )}
      {readOnly && (
        <div
          contentEditable={false}
          style={{ position: 'absolute', top: '1rem', right: '5px' }}
        >
          <Button
            isSize="small"
            isBorderless
            isColor="transparent"
            onClick={copytext}
          >
            <Icon className="fal fa-clone" />
          </Button>
        </div>
      )}
    </div>
  );
};
