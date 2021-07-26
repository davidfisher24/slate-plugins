import { GetElementDeserializerOptions } from '@insendi/editor-v2-core';
import { getNodeDeserializer } from './getNodeDeserializer';

/**
 * See {@link getNodeDeserializer}.
 */
export const getElementDeserializer = (
  options: GetElementDeserializerOptions
) =>
  getNodeDeserializer({
    getNode: () => ({ type: options.type }),
    ...options,
  });
