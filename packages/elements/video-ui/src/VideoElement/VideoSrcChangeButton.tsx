import * as React from 'react';
import { Button, Icon } from '@insendi/ui-kit';

export const VideoSrcChangeButton = ({
  handleSrcChange,
}: {
  handleSrcChange: (val: string) => void;
}) => {
  return (
    <Button
      isSize="small"
      isOutlined
      onMouseDown={() => {
        const url = window.prompt('Enter the URL of the video:');
        if (!url) return;
        handleSrcChange(url);
      }}
    >
      <Icon className="fal fa-link" />
      <span>Change url</span>
    </Button>
  );
};
