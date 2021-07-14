import { ClassName, RootStyleSet } from '@udecode/slate-plugins-ui-fluent';

export const getTableElementStyles = ({
  className,
}: ClassName): RootStyleSet => ({
  root: [
    {
      // Insert css properties
      margin: '10px 0',
      borderCollapse: 'collapse',
      width: '100%',
      selectors: {
        'tr:first-child > *': {
          fontWeight: 600
        },
        'tr:nth-child(odd)': {
          backgroundColor: 'rgb(255, 255, 255)',
          border: '1px solid rgb(193, 199, 208)',
        },
        'tr:nth-child(even)': {
          backgroundColor: 'rgb(244, 245, 247)',
          border: '1px solid rgb(193, 199, 208)',
        },
      },
    },
    className,
  ],
});
