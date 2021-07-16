import { 
    SERVICES,
    PLATFORMS_WITH_SUBTITLES,
    PLATFORMS_WITH_DOWNLOAD
} from '@udecode/slate-plugins-video';

export const isServiceValidInPlatform = 
    (platform: string, service: string): boolean => 
{
    if (service === SERVICES.SUBTITLES)
        return Object.values(PLATFORMS_WITH_SUBTITLES).includes(platform);
    if (service === SERVICES.VIDEO)
        return Object.values(PLATFORMS_WITH_DOWNLOAD).includes(platform);

    return false;
};