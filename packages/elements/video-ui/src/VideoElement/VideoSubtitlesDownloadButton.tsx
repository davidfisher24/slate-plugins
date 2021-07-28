import * as React from 'react';
import { Button, Icon } from '@insendi/ui-kit';
import { downloadSubtitles } from '../utils';

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
    <Button
      name="Download Subtitles"
      isSize="small"
      isOutlined
      onMouseDown={() =>
        downloadSubtitles({
          src: videoUrl,
          subtitles,
          language,
        })
      }
      style={{ marginTop: '0.5rem' }}
    >
      <Icon className="fal fa-download mr-xxs" />
      <span>Download Subtitles</span>
    </Button>
  );
};
