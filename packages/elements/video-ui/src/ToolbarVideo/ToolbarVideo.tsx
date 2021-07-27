import * as React from 'react';
import {
  useEventEditorId,
  useStoreEditorRef,
} from '@insendi/editor-v2-core';
import { insertVideo } from '@insendi/editor-v2-video';
import {
  ToolbarButton,
  ToolbarButtonProps,
} from '@insendi/editor-v2-toolbar';

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
      onMouseDown={async (event: any) => {
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
