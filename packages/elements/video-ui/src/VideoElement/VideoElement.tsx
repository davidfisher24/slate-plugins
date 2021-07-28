import React, { useEffect, useState } from 'react';
import { setNodes } from '@insendi/editor-v2-common';
import { TElement, useEditorRef } from '@insendi/editor-v2-core';
import {
  getVideoMetaData,
  getVideoSource,
  LANGUAGE,
  RATIO,
  VideoNodeData,
} from '@insendi/editor-v2-video';
import { Center, Title } from '@insendi/ui-kit';
import { Transforms } from 'slate';
import { ReactEditor, useReadOnly } from 'slate-react';
import { fetchSubtitles, fetchVideoDownloadFile } from '../utils';
import { getVideoElementStyles } from './VideoElement.styles';
import { VideoElementProps } from './VideoElement.types';
import { VideoFileDownloadButton } from './VideoFileDownloadButton';
import { VideoRatioChangeButtons } from './VideoRatioChangeButtons';
import { VideoRemoveButton } from './VideoRemoveButton';
import { VideoSrcChangeButton } from './VideoSrcChangeButton';
import { VideoSubtitlesDownloadButton } from './VideoSubtitlesDownloadButton';
import { VideoUrlInput } from './VideoUrlInput';

/**
 * VIdeoElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const VideoElement = (props: VideoElementProps) => {
  const { attributes, children, element, nodeProps } = props;

  const {
    ratio = RATIO,
    language = LANGUAGE,
    getSubtitle = () => {
      // For testing buttons
      return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          clearTimeout(wait);
          resolve('https://filesamples.com/samples/document/txt/sample3.txt');
        }, 500)
      }) 
    },
    getVideoDownload = () => {
      // For testing buttons
      return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          clearTimeout(wait);
          resolve('https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4');
        }, 500)
      }) 
    },
  } = element;

  const editor = useEditorRef();
  const readOnly = useReadOnly();
  const { src = '' } = element;

  const frameProps = {
    webkitallowfullscreen: 'true',
    mozallowfullscreen: 'true',
    allowFullScreen: true,
  };

  const [videoId, setVideoId] = useState<string | null>();
  const [videoUrl, setVideoUrl] = useState<string | null>();
  const [subtitles, setSubtitles] = useState<string | null>();
  const [videoDownloadUrl, setVideoDownloadUrl] = useState<string | null>();

  useEffect(() => {
    setSubtitles(null);
    setVideoDownloadUrl(null);
    const { platform, id } = getVideoMetaData(src);
    if (platform && id) {
      const url = getVideoSource({ src, platform, id });
      setVideoId(id);
      setVideoUrl(url);

      if (platform && id && typeof getSubtitle === 'function') {
        fetchSubtitles(
          platform,
          id,
          language,
          getSubtitle
        ).then((subs: string | null) => setSubtitles(subs));
      }

      if (platform && id && typeof getVideoDownload === 'function') {
        fetchVideoDownloadFile(
          platform,
          id,
          language,
          getVideoDownload
        ).then((videoFile: string | null) => setVideoDownloadUrl(videoFile));
      }
    } else {
      setVideoId(null);
      setVideoUrl(null);
    }
  }, [src]);

  const handleRatioChange = (newRatio: string): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    setNodes<TElement<VideoNodeData>>(
      editor,
      { ratio: newRatio },
      { at: path }
    );
  };

  const handleSrcChange = (newSrc: string): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    setNodes<TElement<VideoNodeData>>(editor, { src: newSrc }, { at: path });
  };

  const handleRemoveVideo = (): void => {
    if (!editor) return;
    const path = ReactEditor.findPath(editor, element);
    Transforms.removeNodes(editor, {
      at: path,
    });
  };

  const styles = getVideoElementStyles({ ...props, ratio });

  const renderVideo = () => {
    return (
      <>
        <div css={styles.iframeWrapper?.css}>
          {videoUrl ? (
            <iframe
              css={styles.iframe?.css}
              src={videoUrl}
              {...nodeProps}
              title={`title-${videoId}`}
              id={`title-${videoId}`}
              frameBorder="0"
              {...frameProps}
            />
          ) : (
            <Center css={styles.iframePlaceholder?.css}>
              <Title>Video</Title>
            </Center>
          )}
        </div>
        <div className="buttons">
          {subtitles && (
            <VideoSubtitlesDownloadButton
              videoUrl={src}
              subtitles={subtitles}
              language={language}
            />
          )}

          {videoDownloadUrl && (
            <VideoFileDownloadButton videoUrl={videoDownloadUrl} />
          )}
        </div>
      </>
    );
  };

  if (!readOnly) {
    return (
      <div
        {...attributes}
        css={styles.root.css}
        className={styles.root.className}
      >
        <div contentEditable={false}>
          <div className="buttons" style={{ marginBottom: 0 }}>
            <VideoSrcChangeButton handleSrcChange={handleSrcChange} />
            <VideoRatioChangeButtons
              ratio={ratio}
              handleRatioChange={handleRatioChange}
            />
            <VideoRemoveButton handleRemoveVideo={handleRemoveVideo} />
          </div>
          {renderVideo()}
          <VideoUrlInput
            data-testid="VideoUrlInput"
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
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      {...attributes}
      css={styles.root.css}
      className={styles.root.className}
    >
      <div contentEditable={false}>{renderVideo()}</div>
    </div>
  );
};
