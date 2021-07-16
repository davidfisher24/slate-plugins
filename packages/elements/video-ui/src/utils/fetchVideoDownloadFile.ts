import { SERVICES } from '@udecode/slate-plugins-video';
import { isServiceValidInPlatform } from './isServiceValidInPlatform';

export const fetchVideoDownloadFile = async (
    platform: string, 
    id: string,
    quality: string,
    getVideoDownload?: (
        platform: string, id: string, quality: string
    ) => Promise<string>
): Promise<string|null> => {
    if (!getVideoDownload) {
        return null;
    }
    if (!isServiceValidInPlatform(platform, SERVICES.SUBTITLES)) {
        return null;
    }

    try {
        const videoFileUrl = getVideoDownload(platform, id, quality)
        return videoFileUrl;
    } catch (e) {
        return null
    }
};