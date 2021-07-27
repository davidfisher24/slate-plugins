import { isCollapsed } from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  isElement,
  SPEditor,
  TElement,
  WithOverride,
} from '@insendi/editor-v2-core';
import { isEqual } from 'lodash';
import { Editor, Node, Point, Transforms } from 'slate';
import { ELEMENT_VIDEO } from './defaults';

export const withVideo = (): WithOverride<SPEditor> => (editor) => {
  const matchVideo = (node: Node) => {
    return (
      isElement(node) &&
      node.type === getPlatePluginType(editor, ELEMENT_VIDEO)
    )
  };

  const { deleteBackward, deleteForward, deleteFragment } = editor;

  const preventDeleteVideo = (
    operation: any,
    pointCallback: any,
    nextPoint: any
  ) => (unit: any) => {
    const { selection } = editor;

    if (isCollapsed(selection)) {
      const [video] = Editor.nodes<TElement>(editor, {
        match: matchVideo,
      });
      if (video) {
        // Prevent deletions within a video
        const [, videoPath] = video;
        const start = pointCallback(editor, videoPath);
        const { path } = start;
        if (selection && isEqual(selection.anchor.path,path)) {
          return;
        }
      } else {
        // Prevent deleting video when selection is before or after video
        const next = nextPoint(editor, selection, { unit });
        const [nextVideo] = Editor.nodes(editor, {
          match: matchVideo,
          at: next,
        });
        
        if (nextVideo) return;
      }
    }

    operation(unit);
  };

  editor.deleteFragment = () => {
    const { selection } = editor;
    const [start] = Editor.nodes(editor, {
      match: matchVideo,
      at: selection?.anchor.path,
    });
    const [end] = Editor.nodes(editor, {
      match: matchVideo,
      at: selection?.focus.path,
    });
    // Skip deletes if they start or end in a video, unless start & end in the video
    if ((start || end) && start?.[0] !== end?.[0]) {
      // Clear tab content
      const videos = Editor.nodes(editor, {
        match: matchVideo,
      });
      console.log(videos)
      for (const [, path] of videos) {
        for (const [, childPath] of Node.children(editor, path, {
          reverse: true,
        })) {
          Transforms.removeNodes(editor, { at: childPath });
        }
      }
      Transforms.collapse(editor);
      return;
    }
    deleteFragment();
  };

  // prevent deleting tabs with deleteBackward
  editor.deleteBackward = preventDeleteVideo(
    deleteBackward,
    Editor.start,
    Editor.before
  );

  // prevent deleting tabs with deleteForward
  editor.deleteForward = preventDeleteVideo(
    deleteForward,
    Editor.end,
    Editor.after
  );

  return editor;
};
