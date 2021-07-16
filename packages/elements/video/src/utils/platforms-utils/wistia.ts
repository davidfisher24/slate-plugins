export const getWistiaId = (src: string): string | undefined => {
    let id;
    if (src.includes('/medias/')) {
        const [, rest] = src.split('/medias/');
        const [uuid] = rest.split('/');
        id = uuid;
    }
    return id;
}