import * as React from 'react';

export const IframeShowFullScreenButton = ({
  frameRef,
}: {
  frameRef: any
}) => {
  
  const fullScreen = () => {
    const iframe = frameRef.current;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }

  return (
    <>
        <button
          onClick={fullScreen}
        >
            Full screen
        </button>
    </>
  )
};
