import * as React from 'react';
import { 
    downloadSubtitles
} from '../utils'

export const VideoSubtitlesDownloadButton = ({
  videoUrl,
  subtitles,
  language,
}: {
  videoUrl: string;
  subtitles: string;
  language: string;
}) => {
  return (
    <button
        name="Download Subtitles"
        onClick={() => downloadSubtitles(videoUrl, subtitles, language)}
    >
        <span>Download Subtitles</span>
    </button>
  );
};
