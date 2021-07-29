import { TEditor } from '@insendi/editor-v2-core';
import { Editor, NodeEntry, Path } from 'slate';

export function getNextTab(
  editor: TEditor,
  currentPath: Path
): NodeEntry | undefined {
  try {
    return Editor.node(editor, Path.next(currentPath));
  } catch (err) {
    return undefined;
  }
}
