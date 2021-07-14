/**
 * Normalizes editor content to version 0.63
 */

const isDeprecatedFormat = (editorContent: any): boolean => {
    return typeof editorContent === 'object' && 
        editorContent !== null &&
        'document' in editorContent &&
        'nodes' in editorContent['document']
}

const convertFormatToJSON = (object: any) => {
    let newObject = {};
    for (var key in object) {
        if (key === 'marks') {
            // replace all marks with a simple true/false operator
            object['marks'].forEach((mark: any) => {
                newObject[mark.type] = true;
            })
        } else if (key === 'data') {
            // bring all data properties up onto main node
            for (var datakey in object['data']) {
                newObject[datakey] = object['data'][datakey]
            }
        }  else if (key === 'nodes') {
            // change nodes to children
            newObject['children'] = object[key].map(convertFormatToJSON)
        } else if (Array.isArray(object[key])) {
            newObject[key] = object[key].map(convertFormatToJSON)
        } else if (typeof object[key] === 'object') {
            newObject[key] = convertFormatToJSON(object[key]);
        } else {
            newObject[key] = object[key]
        }
    }
    return newObject;
};


export const normalizeEditorContent = (
  editorContent: any
) => {
    if (isDeprecatedFormat(editorContent)) {
        const originalNodes = editorContent['document']['nodes'];
        const content = originalNodes.map((node: any) => {
            return convertFormatToJSON(node)
        })
        return content
    } else {
        return editorContent;
    }
};
