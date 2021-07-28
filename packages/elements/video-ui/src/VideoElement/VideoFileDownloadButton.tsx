import * as React from 'react';
import { Button, Icon } from '@insendi/ui-kit';
import { downloadVideoFile } from '../utils';

export const VideoFileDownloadButton = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <Button
      name="Download Video"
      isSize="small"
      isOutlined
      onMouseDown={() => downloadVideoFile(videoUrl)}
      style={{ marginTop: '0.5rem' }}
    >
      <Icon className="fal fa-download mr-xxs" />
      <span>Download video</span>
    </Button>
  );
};
