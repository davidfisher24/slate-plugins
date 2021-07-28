import { getVideoMetaData, SERVICES } from '@insendi/editor-v2-video';
import { downloadFile } from './downloadFile';

export const downloadSubtitles = ({
  src,
  subtitles,
  language,
}: {
  src?: string;
  subtitles: string;
  language: string;
}): void => {
  if (!src) return;
  const { platform, id } = getVideoMetaData(src);
  downloadFile(subtitles, SERVICES.SUBTITLES, `${platform}-${id}-${language}`);
};
