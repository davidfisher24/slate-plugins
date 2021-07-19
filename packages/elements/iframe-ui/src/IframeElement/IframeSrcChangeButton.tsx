import * as React from 'react';
import { isSiteValid } from '../utils'

export const IframeSrcChangeButton = ({
  originalSrc,
  handleSrcChange
}: {
  originalSrc: string
  handleSrcChange: (val: string) => void
}) => {
  return (
    <button
        name="iframeUrl"
        onMouseDown={(event) => {
          event.preventDefault();
          const url = window.prompt('Enter the URL of the iframe:', originalSrc);
          if (!url || !isSiteValid(url)) return;
          handleSrcChange(url);
        }}
    >
        <span>Change iframe url</span>
    </button>
  );
};
