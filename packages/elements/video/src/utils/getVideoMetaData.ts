import getVideoId from 'get-video-id';
import { PLATFORMS, PLATFORMS_URL_REGEXP } from '../defaults';
import {
  getMediaImperialId,
  getPanoptoId,
  getVideo23Id,
  getWistiaId
} from './platforms-utils';

export const getVideoMetaData = (
  src: string = ''
): { 
  id?: string | null, 
  platform?: string | null 
} => {
  if (PLATFORMS_URL_REGEXP.MEDIAIMPERIAL.test(src)) {
    return {
      id: getMediaImperialId(src),
      platform: PLATFORMS.MEDIAIMPERIAL,
    };
  }

  if (PLATFORMS_URL_REGEXP.PANOPTO.test(src)) {
    return {
      id: getPanoptoId(src),
      platform: PLATFORMS.PANOPTO,
    };
  }

  if (
    PLATFORMS_URL_REGEXP.VIDEO23.test(src) ||
    PLATFORMS_URL_REGEXP.VIDEO23BI.test(src)
  ) {
    return {
      id: getVideo23Id(src),
      platform: PLATFORMS.VIDEO23,
    };
  }

  if (PLATFORMS_URL_REGEXP.WISTIA.test(src)) {
    return {
      id: getWistiaId(src),
      platform: PLATFORMS.WISTIA,
    };
  }

  if (PLATFORMS_URL_REGEXP.DACAST.test(src)) {
    return {
      platform: PLATFORMS.DACAST,
    };
  }

  const { id, service } = getVideoId(src);
  return { id, platform: service };
};
