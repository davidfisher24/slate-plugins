import { AccordionElementStyleProps, AccordionElementStyleSet } from './AccordionElement.types';

export const getAccordionElementStyles = ({
  className,
  active,
}: AccordionElementStyleProps): AccordionElementStyleSet => {
  const rootClassName = className;

  return {
    root: [
      {
        // Insert css properties
        backgroundColor: active ? '#ccc' : '#eee',
        color: '#444',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        border: 'none',
        outline: 'none',
        selectors: {
          '.slate-accordion_header': {
            width: '100%',
            padding: '6px 12px',
            border: '1px solid #ccc',
            borderTop: 'none',
          },
          '.slate-accordion_body': {
            height: active ? 'auto' : '0',
            margin: active ? '10px 0' : '0',
            padding: active ? '10px 18px 0' : '0',
            backgroundColor: 'white',
            overflow: 'hidden',
            transition: '0.4s',
           }
        },
      },
      rootClassName,
    ],
  };
};
