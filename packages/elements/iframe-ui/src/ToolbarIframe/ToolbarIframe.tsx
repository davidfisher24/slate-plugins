import * as React from 'react';
import {
  useEventEditorId,
  useStoreEditorRef,
} from '@udecode/slate-plugins-core';
import { insertIframe } from '@udecode/slate-plugins-iframe';
import {
  ToolbarButton,
  ToolbarButtonProps,
} from '@udecode/slate-plugins-toolbar';

export interface ToolbarIframeProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the iframe url by calling this promise before inserting the image.
   */
  getIframeSrc?: () => Promise<string>;
}

export const ToolbarIframe = ({ getIframeSrc, ...props }: ToolbarIframeProps) => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));

  return (
    <ToolbarButton
      onMouseDown={async (event: any) => {
        if (!editor) return;

        event.preventDefault();

        let src;
        if (getIframeSrc) {
          src = await getIframeSrc();
        }  

        insertIframe(editor, { src });
      }}
      {...props}
    />
  );
};
