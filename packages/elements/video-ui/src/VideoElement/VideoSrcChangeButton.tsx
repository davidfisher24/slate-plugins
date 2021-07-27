import * as React from 'react';

export const VideoSrcChangeButton = ({
  handleSrcChange
}: {
  handleSrcChange: (val: string) => void
}) => {
  return (
    <button
        name="videoUrl"
        onMouseDown={(event) => {
          event.preventDefault();
          const url = window.prompt('Enter the URL of the video:');
          if (!url) return;
          handleSrcChange(url);
        }}
    >
        <span>Change video url</span>
    </button>
  );
};
