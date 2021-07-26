import { PlatePlugin } from '@insendi/editor-v2-core';

export const createDndPlugin = (): PlatePlugin => ({
  onDrop: (editor) => () => editor.isDragging,
});
