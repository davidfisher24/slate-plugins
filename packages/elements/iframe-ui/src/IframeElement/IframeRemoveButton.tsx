import * as React from 'react';

export const IframeRemoveButton = ({
  handleRemoveIframe
}: {
  handleRemoveIframe: () => void
}) => {
  return (
    <button
        name="removeIframe"
        onMouseDown={() => {handleRemoveIframe()}}
    >
        <span>Remove Iframe</span>
    </button>
  );
};
