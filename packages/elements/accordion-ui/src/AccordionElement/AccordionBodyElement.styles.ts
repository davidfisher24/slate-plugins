import {
  AccordionBodyElementStyleProps,
  AccordionBodyElementStyleSet,
} from './AccordionBodyElement.types';

export const getAccordionBodyElementStyles = ({
  className,
  active
}: // active
AccordionBodyElementStyleProps): AccordionBodyElementStyleSet => {
  const rootClassName = className;

  return {
    root: [
      {
      },
      rootClassName,
    ],
  };
};
