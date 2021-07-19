import * as React from 'react';

export const IframeHeightChangeButton = ({
  originalHeight,
  handleHeightChange
}: {
  originalHeight: number,
  handleHeightChange: (val: number) => void
}) => {
  return (
    <button
        name="iframeHeight"
        onMouseDown={(event) => {
          event.preventDefault();
          const height = window.prompt(
            'Enter the height of the iframe:',
             originalHeight.toString()
          );
          if (!height || parseInt(height) === NaN) return;
          const heightInteger:number = parseInt(height);
          handleHeightChange(heightInteger);
        }}
    >
        <span>Change iframe height</span>
    </button>
  );
};
