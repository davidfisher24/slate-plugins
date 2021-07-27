import * as React from 'react';

export const VideoRemoveButton = ({
  handleRemoveVideo
}: {
  handleRemoveVideo: () => void
}) => {
  return (
    <button
        name="removeVideo"
        onMouseDown={() => {handleRemoveVideo()}}
    >
        <span>Remove Video</span>
    </button>
  );
};
