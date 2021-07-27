import { SERVICES } from '@insendi/editor-v2-video';
import { isServiceValidInPlatform } from './isServiceValidInPlatform';

export const fetchSubtitles = async (
    platform: string, 
    id: string,
    language: string,
    getSubtitle?: (
        platform: string, id: string, language: string
    ) => Promise<string>
): Promise<string|null> => {
    if (!getSubtitle) {
        return null;
    }

    if (!isServiceValidInPlatform(platform, SERVICES.SUBTITLES)) {
        return null;
    }

    try {
        const subtitles = await getSubtitle(platform, id, language);
        return subtitles
    } catch (e) {
        return null
    }
    
};