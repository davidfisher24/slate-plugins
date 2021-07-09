import {
  TabContentElementStyleProps,
  TabContentElementStyleSet,
} from './TabContentElement.types';

export const getTabContentElementStyles = ({
  className,
}: // active
TabContentElementStyleProps): TabContentElementStyleSet => {
  const rootClassName = className;

  return {
    root: [
      {
        // Insert css properties
        // display: active ? 'flex' : 'none',
        // display: 'flex',
        width: '100%',
        padding: '6px 12px',
        border: '1px solid #ccc',
        borderTop: 'none',
      },
      rootClassName,
    ],
  };
};
