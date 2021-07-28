import * as React from 'react';
import { useEventEditorId, useStoreEditorRef } from '@insendi/editor-v2-core';
import { ToolbarButton, ToolbarButtonProps } from '@insendi/editor-v2-toolbar';
import { insertVideo } from '@insendi/editor-v2-video';

export interface ToolbarVideoProps extends ToolbarButtonProps {
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
