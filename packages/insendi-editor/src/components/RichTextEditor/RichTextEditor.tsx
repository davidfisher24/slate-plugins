import React, { useMemo } from 'react';
import { Search } from '@styled-icons/material/Search';
import {
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createDeserializeHTMLPlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createImagePlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  SlatePlugin,
  SlatePlugins,
  SPEditor,
  ToolbarSearchHighlight,
  useFindReplacePlugin
} from '@udecode/slate-plugins';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
import { optionsAutoformat } from './config/autoformatRules';
import {
  editableProps,
  optionsExitBreakPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
} from './config/pluginOptions';
import { BallonToolbarMarks, ToolbarButtons } from './config/Toolbars';
import { normalizeEditorContent } from '../../utils';
import { withStyledPlaceHolders } from './config/withStyledPlaceHolders';

type TEditor = SPEditor & ReactEditor & HistoryEditor;

const id = 'rich text editor';

const editorPlaceHolder = [
  {
    "type": "paragraph",
    "children": [
      {
        "text": "Write here",
      }
    ],
  }
]
let components = createSlatePluginsComponents({
  // customize your components by plugin key
});
components = withStyledPlaceHolders(components);

const options = createSlatePluginsOptions({
  // customize your options by plugin key
});

interface RichTextEditorProps {
  value?: any
}

export const RichTextEditor = ({
  value
}: RichTextEditorProps) => {
  const editorValue = normalizeEditorContent(value)
  const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin();

  const plugins: SlatePlugin<TEditor>[] = useMemo(() => {
    const p = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createAutoformatPlugin(optionsAutoformat),
      createResetNodePlugin(optionsResetBlockTypePlugin),
      createSoftBreakPlugin(optionsSoftBreakPlugin),
      createExitBreakPlugin(optionsExitBreakPlugin),
      createTrailingBlockPlugin({
        type: ELEMENT_PARAGRAPH,
      }),
      createSelectOnBackspacePlugin({
        allow: [ELEMENT_IMAGE],
      }),
      searchHighlightPlugin,
    ];

    p.push(createDeserializeHTMLPlugin({ plugins: p }));

    return p;
  }, [searchHighlightPlugin]);

  return (
    <SlatePlugins
      id={id}
      plugins={plugins}
      components={components}
      options={options}
      editableProps={editableProps}
      initialValue={editorValue || editorPlaceHolder}
      onChange={(value) => {console.log(value)}}
    >
      <ToolbarSearchHighlight icon={Search} setSearch={setSearch} />
      <HeadingToolbar>
        <ToolbarButtons />
      </HeadingToolbar>

      <BallonToolbarMarks />
    </SlatePlugins>
  );
};
