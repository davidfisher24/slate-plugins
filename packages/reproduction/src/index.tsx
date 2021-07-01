import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBasicElementPlugins,
  createBasicMarkPlugins,
  createHistoryPlugin,
  createReactPlugin,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  SlatePlugins,
} from '@udecode/slate-plugins'
import {
  initialValueBasicElements,
  initialValueBasicMarks,
} from './config/initialValues'
import { editableProps } from './config/pluginOptions'

const id = 'Reproduction'

const components = createSlatePluginsComponents({
  // customize your components by plugin key
})

const options = createSlatePluginsOptions({
  // customize your options by plugin key
})

const initialValue = [...initialValueBasicElements, ...initialValueBasicMarks]

const plugins = [
  createReactPlugin(),
  createHistoryPlugin(),
  ...createBasicElementPlugins(),
  ...createBasicMarkPlugins(),
]

const Editor = () => {
  return (
    <SlatePlugins
      id={id}
      plugins={plugins}
      components={components}
      options={options}
      editableProps={editableProps}
      initialValue={initialValue}
    />
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Editor />, rootElement)
