import * as React from 'react';

export const IframeAllowFullScreenSwitch = ({
  allowFullScreen,
  handleAllowFullScreenChange
}: {
  allowFullScreen: boolean
  handleAllowFullScreenChange: (allowFullScreen: boolean) => void
}) => {
  return (
    <>
        <label >
            Allow Fullscreen
        </label>
        <input
            checked={allowFullScreen}
            onChange={() => handleAllowFullScreenChange(!allowFullScreen)}
            type="checkbox" 
            name="allowFullscreen" 
        />
    </>
  )
};
