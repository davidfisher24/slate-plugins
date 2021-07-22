/* eslint-disable simple-import-sort/imports */
import {
  Decorate,
  getSlatePluginOptions,
  isElement,
} from '@udecode/slate-plugins-core';
import { languages, Token, tokenize, Grammar } from 'prismjs';
import { Node, NodeEntry } from 'slate';
import { ELEMENT_CODE_BLOCK } from './defaults';

require('prismjs/themes/prism.css')
require('prismjs/components/prism-java')
require('prismjs/components/prism-python')
require('prismjs/components/prism-r')
require('prismjs/components/prism-sql')

export const getCodeBlockDecorate = (): Decorate => (editor) => {
  const code_block = getSlatePluginOptions(editor, ELEMENT_CODE_BLOCK);

  function getContent(token: any) {
    if (typeof token === 'string') {
      return token;
    }
    if (typeof token.content === 'string') {
      return token.content;
    }
    return token.content.map(getContent).join('');
  }

  // TODO:
  // Revise this logic

  return (entry: NodeEntry) => {
    const [node, path] = entry;
    
    const decorations = []

    if (isElement(node) && node.type === code_block.type) {
      const language: string = node.language || 'javascript';

      const texts: NodeEntry<any>[] = Array.from(Node.texts(node))
      const string: string = texts.map(([n]) => n.text).join('\n');
      const grammar: Grammar = languages[language];
      const tokens: (string | Token)[] = tokenize(string, grammar)
      
      let startEntry = texts.shift();
      let endEntry = startEntry;
      let startOffset = 0;
      let endOffset = 0;

      for (const token of tokens) {
        startEntry = endEntry;
        startOffset = endOffset;

        const [startText, startPath] = startEntry || [];
        const [, endPath] = endEntry || [];

        if (startText && startPath && endPath) {
        
          const content = getContent(token);
          const newlines = content.split('\n').length - 1;
          const length = content.length - newlines;
    
          let available = startText.text.length - startOffset;
          let remaining = length;
    
          endOffset = startOffset + remaining;
    
          // Multiline tokens need their length to be changing, so that they are properly
          // selected.
          let lengthMultiline = length;
          while (available < remaining && texts.length > 0) {
            endEntry = texts.shift();
            const [endText] = endEntry || [];
            remaining = lengthMultiline - available;
            available = endText?.text.length || 0;
            endOffset = remaining;
            lengthMultiline = remaining;
          }
        
          if (typeof token !== 'string') {
            const dec = {
              type: token.alias || token.type,
              anchor: {
                path: [path[0], startPath[0]],
                offset: startOffset,
              },
              focus: {
                path: [path[0], endPath[0]],
                offset: endOffset,
              },
              className: `prism-token token ${token.type}`,
              prism: true
            };
            decorations.push(dec);
          }
        }
      }
    }
    return decorations
  };
};
