export const getMediaImperialId = (src: string): string | undefined => {
    let id;
    if (src.includes('videoId=')) {
        const [, rest] = src.split('videoId=');
        const [uuid] = rest.split('&');
        id = uuid;
    }
    return id;
}