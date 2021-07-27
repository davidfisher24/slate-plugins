export const getPanoptoId = (src: string): string | undefined => {
    let id;
    if (src.includes('id=')) {
        const [, rest] = src.split('id=');
        const [uuid] = rest.split('&');
        id = uuid;
    }
    return id;
}