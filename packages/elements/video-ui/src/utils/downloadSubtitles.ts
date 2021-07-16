import { getVideoMetaData, SERVICES } from "@udecode/slate-plugins-video";
import { downloadFile } from "./downloadFile";

export const downloadSubtitles = (
    src: string, subtitles: any, language: string
): void => {
    const { platform, id } = getVideoMetaData(src);
    downloadFile(
        subtitles,
        SERVICES.SUBTITLES,
        `${platform}-${id}-${language}`
    );
};