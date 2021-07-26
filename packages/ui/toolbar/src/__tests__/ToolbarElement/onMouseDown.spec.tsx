import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as core from '@insendi/editor-v2-core';
import { ELEMENT_H1 } from '@insendi/editor-v2-heading';
import { ToolbarElement } from '../../ToolbarElement/ToolbarElement';
import { input, output } from './onMouseDown.fixture';

it('should render', () => {
  const editor = input;
  jest.spyOn(core, 'useStoreEditorState').mockReturnValue(editor as any);

  const { getByTestId } = render(
    <ToolbarElement type={ELEMENT_H1} icon={null} />
  );

  const element = getByTestId('ToolbarButton');
  fireEvent.mouseDown(element);

  expect(editor.children).toEqual(output.children);
});
