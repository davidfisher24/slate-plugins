import { PLATFORMS } from '../defaults';
import { handleVideo23Url } from './platforms-utils';

export const getVideoSource = ({
  src = '', platform, id
}: {
  src?: string;
  platform?: string | null;
  id?: string | null;
} = {}): string => {
    if (!src || !platform) return src;
 
    switch (platform) {
      case PLATFORMS.YOUTUBE:
        return `https://www.youtube.com/embed/${id}`;
        break;
      case PLATFORMS.VIMEO:
        return `https://player.vimeo.com/video/${id}`;
        break;
      case PLATFORMS.PANOPTO:
        return src.replace('Viewer', 'Embed');
        break;
      case PLATFORMS.VIDEO23:
        return handleVideo23Url(src);
        break;
      case PLATFORMS.WISTIA:
        return `https://fast.wistia.net/embed/iframe/${id}?videoFoam=true`;
        break;
      case PLATFORMS.DACAST:
        return src;
        break;
      case PLATFORMS.MEDIAIMPERIAL:
        return src;
      default:
        return src;
        break;
    }
};
