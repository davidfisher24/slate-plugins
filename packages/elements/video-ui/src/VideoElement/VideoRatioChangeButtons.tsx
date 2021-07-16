import * as React from 'react';

export const VideoRatioChangeButtons = ({
  ratio,
  handleRatioChange
}: {
  ratio: string;
  handleRatioChange: (val: string) => void
}) => {
  return (
    <>
        <button
            name="16:9"
            onClick={() => handleRatioChange('16:9')}
            aria-selected={ratio === '16:9'}
        >
            <span>16:9</span>
            {ratio === '16:9' && <span>✓</span>}
        </button>
        <button
            name="4:3"
            onClick={() => handleRatioChange('4:3')}
            aria-selected={ratio === '4:3'}
        >
            <span>4:3</span>
            {ratio === '4:3' && <span>✓</span>}
        </button>
    </>
  );
};
