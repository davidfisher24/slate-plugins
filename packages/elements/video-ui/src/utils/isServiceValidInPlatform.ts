import {
  PLATFORMS_WITH_DOWNLOAD,
  PLATFORMS_WITH_SUBTITLES,
  SERVICES,
} from '@insendi/editor-v2-video';

export const isServiceValidInPlatform = (
  platform: string,
  service: string
): boolean => {
  if (service === SERVICES.SUBTITLES)
    return Object.values(PLATFORMS_WITH_SUBTITLES).includes(platform);
  if (service === SERVICES.VIDEO)
    return Object.values(PLATFORMS_WITH_DOWNLOAD).includes(platform);

  return false;
};
