import React, { useState, useEffect } from 'react';
import { setNodes } from '@insendi/editor-v2-common';
import { Transforms } from 'slate';
import { TElement, useEditorRef } from '@insendi/editor-v2-core';
import { 
  VideoNodeData, 
  getVideoMetaData,
  getVideoSource,
  RATIO,
  LANGUAGE
} from '@insendi/editor-v2-video';
import { ReactEditor } from 'slate-react';
import { getVideoElementStyles } from './VideoElement.styles';
import { VideoElementProps } from './VideoElement.types';
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


  const editor = useEditorRef();
  const { src = '' } = element;

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

  const styles = getVideoElementStyles({ ...props, ratio });

  return (
    <div 
      {...attributes}
      css={styles.root.css}
      className={styles.root.className}
    >
      <div contentEditable={false}>
        <div 
          css={styles.iframeWrapper?.css}
        >
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
            <>
              <iframe
                css={styles.iframe?.css}
              />
              <div css={styles.iframePlaceholder?.css}>
                <p>Video</p>
              </div>
            </>
          )}
        </div>

        <VideoUrlInput
          data-testid="VideoUrlInput"
          src={src}
          css={styles.input?.css}
          className={styles.input?.className}
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
