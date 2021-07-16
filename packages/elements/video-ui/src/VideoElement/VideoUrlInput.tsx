import * as React from 'react';

export const VideoUrlInput = ({
  className,
  src,
  onChange,
  ...props
}: {
  className?: string;
  src: string;
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
        setValue(newSrc);
        onChange(newSrc);
      }}
      {...props}
    />
  );
};
