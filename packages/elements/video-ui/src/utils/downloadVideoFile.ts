import { SERVICES } from "@udecode/slate-plugins-video";
import { downloadFile } from "./downloadFile";

export const downloadVideoFile = (
    url: string
): void => {
    downloadFile(
        url,
        SERVICES.VIDEO,
    );
};