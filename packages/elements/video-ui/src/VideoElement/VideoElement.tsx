import React, { useState, useEffect } from 'react';
import { setNodes } from '@udecode/slate-plugins-common';
import { Transforms } from 'slate';
import { TElement, useEditorRef } from '@udecode/slate-plugins-core';
import { 
  VideoNodeData, 
  getVideoMetaData,
  getVideoSource,
  RATIO,
  LANGUAGE
} from '@udecode/slate-plugins-video';
import { ClassName, getRootClassNames } from '@udecode/slate-plugins-ui-fluent';
import { styled } from '@uifabric/utilities';
import { ReactEditor } from 'slate-react';
import { getVideoElementStyles } from './VideoElement.styles';
import {
  VideoElementProps,
  VideoElementStyleProps,
  VideoElementStyleSet,
} from './VideoElement.types';
import { VideoUrlInput } from './VideoUrlInput';
import { VideoSubtitlesDownloadButton } from './VideoSubtitlesDownloadButton';
import { VideoFileDownloadButton } from './VideoFileDownloadButton';
import { VideoRatioChangeButtons } from './VideoRatioChangeButtons';
import { VideoSrcChangeButton } from './VideoSrcChangeButton';
import { VideoRemoveButton } from './VideoRemoveButton';
import { 
  fetchSubtitles,
  fetchVideoDownloadFile
} from '../utils'

const getClassNames = getRootClassNames<
  VideoElementStyleProps,
  VideoElementStyleSet
>();

/**
 * VIdeoElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const VideoElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  nodeProps,
}: VideoElementProps) => {
  const { 
    ratio = RATIO,
    language = LANGUAGE,
    getSubtitle = () => {
      return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          clearTimeout(wait);
          resolve('https://filesamples.com/samples/document/txt/sample3.txt');
        }, 3000)
      })
    },
    getVideoDownload = () => {
      return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          clearTimeout(wait);
          resolve('https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4');
        }, 3000)
      })
    },
  } = element;

  const classNames = getClassNames(styles, {
    className,
    // Other style props
    ratio
  });

  const editor = useEditorRef();
  const { src } = element;

  const frameProps = {
    webkitallowfullscreen: 'true',
    mozallowfullscreen: 'true',
    allowFullScreen: true,
  };

  const [videoId, setVideoId] = useState<string|null>();
  const [videoUrl, setVideoUrl] = useState<string|null>();
  const [subtitles, setSubtitles] = useState<string|null>();
  const [videoDownloadUrl, setVideoDownloadUrl] = useState<string|null>();

  useEffect(() => {
    setSubtitles(null)
    setVideoDownloadUrl(null)
    const { platform, id } = getVideoMetaData(src);
    if (platform && id) {
      const url = getVideoSource({src, platform, id});
      setVideoId(id)
      setVideoUrl(url)
      
      if (platform && id && typeof getSubtitle === 'function') {
        fetchSubtitles(
          platform, id, language, getSubtitle
        ).then((subtitles: string | null) => setSubtitles(subtitles))
      }

      if (platform && id && typeof getVideoDownload === 'function') {
        fetchVideoDownloadFile(
          platform, id, language, getVideoDownload
        ).then((videoFile: string | null) => setVideoDownloadUrl(videoFile))
      }
    } else {
      setVideoId(null)
      setVideoUrl(null)
    }
  }, [element])

  const handleRatioChange = (ratio: string): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    setNodes<TElement<VideoNodeData>>(
        editor,
        { ratio },
        { at: path }
    );
  };

  const handleSrcChange = (src: string): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    setNodes<TElement<VideoNodeData>>(
        editor,
        { src },
        { at: path }
    );
  }

  const handleRemoveVideo = (): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    Transforms.removeNodes(editor, {
      at: path,
    });
  }

  return (
    <div {...attributes} className={classNames.root}>
      <div contentEditable={false}>
        <div className={classNames.iframeWrapper}>
          
          {videoUrl ? (
            <iframe
              className={classNames.iframe}
              src={videoUrl}
              {...nodeProps}
              title={`title-${videoId}`}
              id={`title-${videoId}`}
              frameBorder="0"
              {...frameProps}
            />
          ) : (
            <>
              <iframe
                className={classNames.iframe}
              />
              <div className={classNames.iframePlaceholder}>
                <p>Video</p>
              </div>
            </>
          )}
        </div>

        <VideoUrlInput
          data-testid="VideoUrlInput"
          className={classNames.input}
          src={src}
          onChange={(val: string) => {
            const path = ReactEditor.findPath(editor, element);
            setNodes<TElement<VideoNodeData>>(
              editor,
              { src: val },
              { at: path }
            );
          }}
        />

        <VideoSrcChangeButton
          handleSrcChange={handleSrcChange}
        />

        <VideoRatioChangeButtons 
          ratio={ratio}
          handleRatioChange={handleRatioChange}
        />

        <VideoRemoveButton 
          handleRemoveVideo={handleRemoveVideo}
        />

        {subtitles && (
          <VideoSubtitlesDownloadButton 
            videoUrl={src}
            subtitles={subtitles}
            language={language}
          />
        )}

        {videoDownloadUrl && (
          <VideoFileDownloadButton 
            videoUrl={videoDownloadUrl}
          />
        )}
      </div>
      {children}
    </div>
  );
};

/**
 * VideoElement
 */
export const VideoElement = styled<
  VideoElementProps,
  VideoElementStyleProps,
  VideoElementStyleSet
>(VideoElementBase, getVideoElementStyles, undefined, {
  scope: 'VideoElement',
});
