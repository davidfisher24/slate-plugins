import * as React from 'react';
import { CSSProp } from 'styled-components';

export const VideoUrlInput = ({
  className,
  src,
  onChange,
  ...props
}: {
  className?: string;
  css?: CSSProp;
  src: string;
  onChange: Function;
}) => {
  const [value, setValue] = React.useState(src);

  const validateUrl = (newUrl: string) => {
    if (newUrl.substring(0, 4) !== 'http') {
      const regex = /(?<=src=").*?(?=[*"])/g;
      const src = newUrl.match(regex)?.[0];
      if (src) {
        newUrl = src;
      }
    }
    return newUrl;
  };

  return (
    <input
      value={value}
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => {
        const newUrl = e.target.value;
        const newSrc = e.target.value;
        validateUrl(newSrc);
        setValue(newSrc);
        onChange(newSrc);
      }}
      {...props}
    />
  );
};
