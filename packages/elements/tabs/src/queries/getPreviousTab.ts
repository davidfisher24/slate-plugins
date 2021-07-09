import { TEditor } from '@udecode/slate-plugins-core';
import { Editor, NodeEntry, Path } from 'slate';

export function getPreviousTab(
  editor: TEditor,
  currentPath: Path
): NodeEntry | undefined {
  try {
    return Editor.node(editor, Path.previous(currentPath));
  } catch (err) {
    return undefined;
  }
}
