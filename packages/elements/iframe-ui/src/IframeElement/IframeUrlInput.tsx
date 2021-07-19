import * as React from 'react';
import { isSiteValid } from '../utils'

export const IframeUrlInput = ({
  className,
  src,
  onChange,
  ...props
}: {
  className?: string;
  src?: string;
  onChange: Function;
}) => {
  const [value, setValue] = React.useState(src);

  return (
    <input
      className={className}
      value={value}
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => {
        const newSrc = e.target.value;
        if (!isSiteValid(newSrc)) {
          onChange(null);
        } else {
          onChange(newSrc);
        }
      }}
      {...props}
    />
  );
};
