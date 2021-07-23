import {
  AccordionHeaderElementStyleProps,
  AccordionHeaderElementStyleSet,
} from './AccordionHeaderElement.types';

export const getAccordionHeaderElementStyles = ({
  className,
}: // active
AccordionHeaderElementStyleProps): AccordionHeaderElementStyleSet => {
  const rootClassName = className;

  return {
    root: [
      {
      },
      rootClassName,
    ],
  };
};
