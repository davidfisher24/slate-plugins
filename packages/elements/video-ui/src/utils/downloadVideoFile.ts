import { SERVICES } from "@insendi/editor-v2-video";
import { downloadFile } from "./downloadFile";

export const downloadVideoFile = (
    url: string
): void => {
    downloadFile(
        url,
        SERVICES.VIDEO,
    );
};