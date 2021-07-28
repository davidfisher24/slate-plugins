import * as React from 'react';
import { Button, Icon } from '@insendi/ui-kit';

export const VideoRatioChangeButtons = ({
  ratio,
  handleRatioChange,
}: {
  ratio: string;
  handleRatioChange: (val: string) => void;
}) => {
  return (
    <>
      <Button
        name="16:9"
        isSize="small"
        isOutlined
        onClick={() => handleRatioChange('16:9')}
        aria-selected={ratio === '16:9'}
      >
        <Icon className="fal fa-expand-arrows-alt" />
        <span>16:9</span>
        {ratio === '16:9' && <Icon className="fal fa-check" />}
      </Button>
      <Button
        name="4:3"
        isSize="small"
        isOutlined
        onClick={() => handleRatioChange('4:3')}
        aria-selected={ratio === '4:3'}
      >
        <Icon className="fal fa-expand-arrows-alt" />
        <span>4:3</span>
        {ratio === '4:3' && <Icon className="fal fa-check" />}
      </Button>
    </>
  );
};
