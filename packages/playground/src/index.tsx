import 'tippy.js/dist/tippy.css'
import './index.css'
import React, { useMemo } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ReactDOM from 'react-dom'
import { Search } from '@styled-icons/material/Search'
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
  ELEMENT_MENTION,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  MentionElement,
  MentionSelect,
  SlatePlugin,
  SlatePlugins,
  SPEditor,
  ToolbarSearchHighlight,
  useFindReplacePlugin,
  useMentionPlugin,
  withProps,
} from '@udecode/slate-plugins'
import { createExcalidrawPlugin } from '@udecode/slate-plugins-excalidraw'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'
import { optionsAutoformat } from './config/autoformatRules'
import { initialValuePlayground } from './config/initialValues'
import {
  editableProps,
  optionsExitBreakPlugin,
  optionsMentionPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
} from './config/pluginOptions'
import { renderMentionLabel } from './config/renderMentionLabel'
import { BallonToolbarMarks, ToolbarButtons } from './config/Toolbars'
import { withStyledDraggables } from './config/withStyledDraggables'
import { withStyledPlaceHolders } from './config/withStyledPlaceHolders'

type TEditor = SPEditor & ReactEditor & HistoryEditor

const id = 'Examples/Playground'

let components = createSlatePluginsComponents({
  [ELEMENT_MENTION]: withProps(MentionElement, {
    renderLabel: renderMentionLabel,
  }),
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components)

const options = createSlatePluginsOptions({
  // customize your options by plugin key
})

const Plugins = () => {
  const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin()
  const { getMentionSelectProps, plugin: mentionPlugin } = useMentionPlugin(
    optionsMentionPlugin
  )

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
      createExcalidrawPlugin(),
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
      mentionPlugin,
      searchHighlightPlugin,
    ]

    p.push(createDeserializeHTMLPlugin({ plugins: p }))

    return p
  }, [mentionPlugin, searchHighlightPlugin])

  return (
    <DndProvider backend={HTML5Backend}>
      <SlatePlugins
        id={id}
        plugins={plugins}
        components={components}
        options={options}
        editableProps={editableProps}
        initialValue={initialValuePlayground}
      >
        <ToolbarSearchHighlight icon={Search} setSearch={setSearch} />
        <HeadingToolbar>
          <ToolbarButtons />
        </HeadingToolbar>

        <BallonToolbarMarks />

        <MentionSelect
          {...getMentionSelectProps()}
          renderLabel={renderMentionLabel}
        />
      </SlatePlugins>
    </DndProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Plugins />, rootElement)
