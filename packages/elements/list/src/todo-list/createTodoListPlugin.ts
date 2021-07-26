import { getToggleElementOnKeyDown } from '@insendi/editor-v2-common';
import { getRenderElement, PlatePlugin } from '@insendi/editor-v2-core';
import { ELEMENT_TODO_LI } from './defaults';
import { getTodoListDeserialize } from './getTodoListDeserialize';

export const createTodoListPlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_TODO_LI,
  renderElement: getRenderElement(ELEMENT_TODO_LI),
  deserialize: getTodoListDeserialize(),
  onKeyDown: getToggleElementOnKeyDown(ELEMENT_TODO_LI),
});
