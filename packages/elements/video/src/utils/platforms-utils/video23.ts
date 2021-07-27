export const getVideo23Id = (src: string): string | undefined => {
    let id;
    if (src.includes('/secret/')) {
        const [, rest] = src.split('/secret/');
        const [, token] = rest.split('/');
        id = token;
    }
    return id;
}

export const handleVideo23Url = (src: string) => {
    // Secret link
    if (src.includes('/secret/')) {
        const [host, rest] = src.split('/secret/');
        const [secret, token] = rest.split('/');
        return `${host}/v.ihtml/player.html?token=${token}&source=embed&photo_id=${secret}`;
    }

    // Embed link
    if (src.includes('/v.ihtml/player.html')) {
        return src;
    }

    return '';
};