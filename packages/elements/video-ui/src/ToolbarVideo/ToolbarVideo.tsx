import * as React from 'react';
import {
  useEventEditorId,
  useStoreEditorRef,
} from '@udecode/slate-plugins-core';
import { insertVideo } from '@udecode/slate-plugins-video';
import {
  ToolbarButton,
  ToolbarButtonProps,
} from '@udecode/slate-plugins-toolbar';

export interface ToolbarVideoProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the video url by calling this promise before inserting the image.
   */
  getVideoSrc?: () => Promise<string>;
}

export const ToolbarVideo = ({ getVideoSrc, ...props }: ToolbarVideoProps) => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));

  return (
    <ToolbarButton
      onMouseDown={async (event) => {
        if (!editor) return;

        event.preventDefault();

        let src;
        if (getVideoSrc) {
          src = await getVideoSrc();
        }  

        insertVideo(editor, { src });
      }}
      {...props}
    />
  );
};
