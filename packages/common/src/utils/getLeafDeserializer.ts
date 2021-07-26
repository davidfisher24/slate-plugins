import { GetLeafDeserializerOptions } from '@insendi/editor-v2-core';
import { getNodeDeserializer } from './getNodeDeserializer';

/**
 * See {@link getNodeDeserializer}.
 */
export const getLeafDeserializer = (options: GetLeafDeserializerOptions) =>
  getNodeDeserializer({
    getNode: () => ({ [options.type]: true }),
    ...options,
  });
