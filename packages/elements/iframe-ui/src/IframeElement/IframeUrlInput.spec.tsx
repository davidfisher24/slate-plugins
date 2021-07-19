import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { IframeUrlInput } from './IframeUrlInput';

it('should render', () => {
  const onChange = jest.fn();

  const { getByTestId } = render(
    <IframeUrlInput
      data-testid="IframeUrlInput"
      src="test"
      onChange={onChange}
    />
  );

  const element = getByTestId('IframeUrlInput');

  fireEvent.change(element, {
    target: { value: 'testt' },
  });
  fireEvent.click(element);

  expect(onChange).toBeCalled();
});
