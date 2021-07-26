import {
  getPlatePluginWithOverrides,
  PlatePlugin,
  SPEditor,
  WithOverride,
} from '@insendi/editor-v2-core';
import { insertDeserializedFragment } from '@insendi/editor-v2-serializer';
import { ReactEditor } from 'slate-react';
import { deserializeCSV } from './utils';

export interface WithDeserializeCSVOptions<
  T extends SPEditor = SPEditor & ReactEditor
> {
  plugins?: PlatePlugin<T>[];
}

/**
 * Enables support for deserializing content
 * from CSV format to Slate format.
 */
export const withDeserializeCSV = <
  T extends ReactEditor & SPEditor = ReactEditor & SPEditor
>({ plugins = [] }: WithDeserializeCSVOptions<T> = {}): WithOverride<T> => (
  editor
) => {
  const { insertData } = editor;

  editor.insertData = (data) => {
    const content = data.getData('text/plain');

    if (content) {
      const fragment = deserializeCSV(editor, content, true);

      if (fragment?.length) {
        return insertDeserializedFragment(editor, { fragment, plugins });
      }
    }

    insertData(data);
  };

  return editor;
};

/**
 * @see {@link withDeserializeCSV}
 */
export const createDeserializeCSVPlugin = getPlatePluginWithOverrides(
  withDeserializeCSV
);
