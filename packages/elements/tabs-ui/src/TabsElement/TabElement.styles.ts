import { TabElementStyleProps, TabElementStyleSet } from './TabElement.types';

export const getTabElementStyles = ({
  className,
  active,
}: TabElementStyleProps): TabElementStyleSet => {
  const rootClassName = className;

  return {
    root: [
      {
        // Insert css properties
        backgroundColor: active ? '#fff' : 'inherit',
        minWidth: '20px',
        float: 'left',
        borderRight: '1px solid #aaa',
        outline: 'none',
        cursor: 'pointer',
        padding: '14px 16px',
        transition: '0.3s',
      },
      rootClassName,
    ],
  };
};
