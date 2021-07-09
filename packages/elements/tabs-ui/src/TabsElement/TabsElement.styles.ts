import { ClassName, RootStyleSet } from '@udecode/slate-plugins-ui-fluent';

export const getTabsElementStyles = ({
  className,
}: ClassName): RootStyleSet => ({
  root: [
    {
      // Insert css properties
      margin: '10px 0',
      borderCollapse: 'collapse',
      width: '100%',
      borderBottom: '2px solid #eaeaea',
    },
    className,
  ],
});
