import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { VideoUrlInput } from './VideoUrlInput';

it('should render', () => {
  const onChange = jest.fn();

  const { getByTestId } = render(
    <VideoUrlInput
      data-testid="VideoUrlInput"
      src="test"
      onChange={onChange}
    />
  );

  const element = getByTestId('VideoUrlInput');

  fireEvent.change(element, {
    target: { value: 'testt' },
  });
  fireEvent.click(element);

  expect(onChange).toBeCalled();
});
