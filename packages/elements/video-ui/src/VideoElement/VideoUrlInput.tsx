import * as React from 'react';
import { Input } from '@insendi/ui-kit';
import { CSSProp } from 'styled-components';

export const VideoUrlInput = ({
  src,
  onChange,
  ...props
}: {
  css?: CSSProp;
  src: string;
  onChange: Function;
}) => {
  const [value, setValue] = React.useState(src);

  const validateUrl = (newUrl: string) => {
    if (newUrl.substring(0, 4) !== 'http') {
      const regex = /(?<=src=").*?(?=[*"])/g;
      const newSrc = newUrl.match(regex)?.[0];
      if (newSrc) {
        newUrl = newSrc;
      }
    }
    return newUrl;
  };

  const style = {
    marginTop: '5px',
    boxSizing: 'border-box',
  };

  return (
    /* contentEditable on the input is to prevent 'Permission denied' error in FF */
    <Input
      contentEditable
      value={value}
      onChange={(e: any) => {
        const newSrc = e.value;
        validateUrl(newSrc);
        setValue(newSrc);
        onChange(newSrc);
      }}
      onClick={(e: any) => e.stopPropagation()}
      onMouseDown={(e: any) => (e.target.contentEditable = false)}
      style={style}
      isRadiusless
      isMarginless
      {...props}
    />
  );
};
