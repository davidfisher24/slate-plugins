import * as React from 'react';
import { 
    downloadVideoFile
} from '../utils'

export const VideoFileDownloadButton = ({
  videoUrl,
}: {
  videoUrl: string;
}) => {
  return (
    <button
        name="Download Video"
        onClick={() => downloadVideoFile(videoUrl)}
    >
        <span>Download Video</span>
    </button>
  );
};
