import * as React from 'react';
import { RenderLeaf } from '@insendi/editor-v2-core';
import { RenderLeafProps } from 'slate-react';
import { PreviewLeaf } from './PreviewLeaf/PreviewLeaf';

export const getPreviewRenderLeaf = (): RenderLeaf => () => (
  props: RenderLeafProps
) => <PreviewLeaf {...props} />;
