import React, { useState, useEffect, useRef } from 'react';
import { setNodes } from '@udecode/slate-plugins-common';
import { Transforms } from 'slate';
import { TElement, useEditorRef } from '@udecode/slate-plugins-core';
import { 
  IframeNodeData, 
  //getIframeMetaData,
  HEIGHT,
  ALLOW_FULL_SCREEN
} from '@udecode/slate-plugins-iframe';
import { ClassName, getRootClassNames } from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { ReactEditor } from 'slate-react';
import { getIframeElementStyles } from './IframeElement.styles';
import {
  IframeElementProps,
  IframeElementStyleProps,
  IframeElementStyleSet,
} from './IframeElement.types';
import { IframeUrlInput } from './IframeUrlInput';
import { IframeSrcChangeButton } from './IframeSrcChangeButton';
import { IframeHeightChangeButton } from './IframeHeightChangeButton';
import { IframeRemoveButton } from './IframeRemoveButton';
import { IframeAllowFullScreenSwitch } from './IframeAllowFullScreenSwitch';
import { IframeShowFullScreenButton } from './IframeShowFullScreenButton';

const getClassNames = getRootClassNames<
  IframeElementStyleProps,
  IframeElementStyleSet
>();

/**
 * IframeElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const IframeElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  nodeProps,
}: IframeElementProps) => {
  const { 
    height = HEIGHT,
    allowFullScreen = ALLOW_FULL_SCREEN,
  } = element;

  const classNames = getClassNames(styles, {
    className,
    // Other style props
    height
  });

  const editor = useEditorRef();
  const frameRef = useRef<HTMLIFrameElement>(null);
  const { src } = element;

  const [iframeUrl, setIframeUrl] = useState<string|null>();

  useEffect(() => {
    setIframeUrl(src)
  }, [element])

  const handleHeightChange = (height: number): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    setNodes<TElement<IframeNodeData>>(
        editor,
        { height },
        { at: path }
    );
  };

  const handleAllowFullScreenChange = (allowFullScreen: boolean): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    setNodes<TElement<IframeNodeData>>(
        editor,
        { allowFullScreen },
        { at: path }
    );
  };

  const handleSrcChange = (src: string): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    setNodes<TElement<IframeNodeData>>(
        editor,
        { src },
        { at: path }
    );
  }

  const handleRemoveIframe = (): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    Transforms.removeNodes(editor, {
      at: path,
    });
  }

  return (
    <div {...attributes} className={classNames.root}>
      <div contentEditable={false}>
        {iframeUrl && allowFullScreen && (
          <IframeShowFullScreenButton
            frameRef={frameRef}
          />
        )}
        <div className={classNames.iframeWrapper}> 
          {iframeUrl ? (
            <>
              <iframe
                ref={frameRef}
                title="description"
                className={classNames.iframe}
                allowFullScreen={allowFullScreen}
                src={iframeUrl}
                {...nodeProps}
                frameBorder="0"
              />
              
            </>
          ) : (
            <>
              <iframe
                className={classNames.iframe}
              />
              <div className={classNames.iframePlaceholder}>
                <p>Iframe</p>
              </div>
            </>
          )}
        </div>

        <IframeUrlInput
          data-testid="IrameUrlInput"
          className={classNames.input}
          src={src}
          onChange={(val: string) => {
            const path = ReactEditor.findPath(editor, element);
            setNodes<TElement<IframeNodeData>>(
              editor,
              { src: val },
              { at: path }
            );
          }}
        />

        <IframeAllowFullScreenSwitch
          allowFullScreen={allowFullScreen}
          handleAllowFullScreenChange={handleAllowFullScreenChange}
        />

        <IframeSrcChangeButton
          originalSrc={src || ''}
          handleSrcChange={handleSrcChange}
        />

        <IframeHeightChangeButton
          originalHeight={height}
          handleHeightChange={handleHeightChange}
        />

        <IframeRemoveButton 
          handleRemoveIframe={handleRemoveIframe}
        />
      </div>
      {children}
    </div>
  );
};

/**
 *IframeElement
 */
export const IframeElement = styled<
  IframeElementProps,
  IframeElementStyleProps,
  IframeElementStyleSet
>(IframeElementBase, getIframeElementStyles, undefined, {
  scope: 'IframeElement',
});
