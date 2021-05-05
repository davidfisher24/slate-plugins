import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ELEMENT_H1 } from '@udecode/slate-plugins-heading';
import { createLinkPlugin } from '@udecode/slate-plugins-link';
import { setEventEditorId } from '../../../../core/src/stores/event-editor/event-editor.actions';
import { slatePluginsStore } from '../../../../core/src/stores/slate-plugins/slate-plugins.store';
import { createEditorPlugins } from '../../../../slate-plugins/src/utils/createEditorPlugins';
import { ToolbarLink } from './ToolbarLink';
import {
  input1,
  input2,
  input3,
  output1,
  output2,
  output3,
} from './ToolbarLink.fixtures';

describe('ToolbarLink', () => {
  describe('when default', () => {
    it('should render', () => {
      const editor = createEditorPlugins({
        editor: input1,
        plugins: [createLinkPlugin()],
      });

      slatePluginsStore.setState((state) => ({ main: { editor } as any }));
      setEventEditorId('focus', editor.id);
      jest
        .spyOn(window, 'prompt')
        .mockReturnValue('https://i.imgur.com/removed.png');

      const { getByTestId } = render(<ToolbarLink icon={null} />);

      const element = getByTestId('ToolbarButton');
      fireEvent.mouseDown(element);

      expect(editor.children).toEqual(output1.children);
    });
  });

  describe('when with url', () => {
    it('should render', () => {
      const editor = createEditorPlugins({
        editor: input2,
        plugins: [createLinkPlugin()],
      });
      editor.selection = {} as any;

      slatePluginsStore.setState((state) => ({ main: { editor } as any }));
      setEventEditorId('focus', editor.id);
      const prompt = jest
        .spyOn(window, 'prompt')
        .mockReturnValue('https://i.imgur.com/changed.png');

      const { getByTestId } = render(
        <ToolbarLink type={ELEMENT_H1} icon={null} />
      );

      const element = getByTestId('ToolbarButton');
      fireEvent.mouseDown(element);

      expect(prompt).toHaveBeenCalledWith(
        'Enter the URL of the link:',
        'https://i.imgur.com/removed.png'
      );

      expect(editor.children).toEqual(output2.children);
    });
  });

  describe('when without url', () => {
    it('should render', () => {
      const editor = createEditorPlugins({
        editor: input3,
        plugins: [createLinkPlugin()],
      });

      slatePluginsStore.setState((state) => ({ main: { editor } as any }));
      setEventEditorId('focus', editor.id);

      jest.spyOn(window, 'prompt').mockReturnValue('');

      const { getByTestId } = render(
        <ToolbarLink type={ELEMENT_H1} icon={null} />
      );

      const element = getByTestId('ToolbarButton');
      fireEvent.mouseDown(element);

      expect(editor.children).toEqual(output3.children);
    });
  });
});
