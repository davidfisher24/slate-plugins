import { TEditor } from '@udecode/slate-plugins-core';
import { Editor, NodeEntry, Path } from 'slate';

export function getNextAccordion(
  editor: TEditor,
  currentPath: Path
): NodeEntry | undefined {
  try {
    return Editor.node(editor, Path.next(currentPath));
  } catch (err) {
    return undefined;
  }
}
