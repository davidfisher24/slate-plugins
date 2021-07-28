import * as React from 'react';
import { Button, Icon } from '@insendi/ui-kit';

export const VideoRemoveButton = ({
  handleRemoveVideo,
}: {
  handleRemoveVideo: () => void;
}) => {
  return (
    <Button
      isSize="small"
      isOutlined
      onMouseDown={() => {
        handleRemoveVideo();
      }}
    >
      <Icon className="fal fa-times" />
      <span>Remove</span>
    </Button>
  );
};
