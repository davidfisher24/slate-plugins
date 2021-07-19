import { ALLOWED_SITES } from '@udecode/slate-plugins-iframe';

export const isSiteValid = (url: string): boolean => {
    let allowed: boolean = false;

    ALLOWED_SITES.forEach((site: RegExp) => {
        if (site.test(url)) {
            allowed = true;
        }
    })

    return allowed;
}

