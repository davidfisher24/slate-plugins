import { ELEMENT_DEFAULT } from '@insendi/editor-v2-common';
import {
  getPlatePluginType,
  SPEditor,
  TDescendant,
  TElement,
  TNode,
} from '@insendi/editor-v2-core';
import {
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TR,
} from '@insendi/editor-v2-table';
import { parse } from 'papaparse';

export const deserializeCSV = <T extends SPEditor = SPEditor>(
  editor: T,
  content: string,
  header = false
): TDescendant[] | undefined => {
  // Verify it's a csv string
  const testCsv = parse(content, { preview: 2 });

  if (testCsv.errors.length === 0) {
    const csv = parse(content, { header });

    const paragraph = getPlatePluginType(editor, ELEMENT_DEFAULT);
    const table = getPlatePluginType(editor, ELEMENT_TABLE);
    const th = getPlatePluginType(editor, ELEMENT_TH);
    const tr = getPlatePluginType(editor, ELEMENT_TR);
    const td = getPlatePluginType(editor, ELEMENT_TD);

    const ast: TNode = {
      type: table,
      children: [],
    };

    if (csv.meta.fields) {
      // csv file has headers, data structure is an array of objects keyed on the heading title
      ast.children.push({
        type: tr,
        children: csv.meta.fields.map((field: string) => ({
          type: th,
          children: [{ type: paragraph, children: [{ text: field }] }],
        })),
      });
      for (const row of csv.data as Record<string, string>[]) {
        ast.children.push({
          type: tr,
          children: csv.meta.fields.map((field: string) => ({
            type: td,
            children: [
              { type: paragraph, children: [{ text: row[field] || '' }] },
            ],
          })),
        });
      }
    } else {
      // csv is an array of arrays
      for (const row of csv.data as [string[]]) {
        ast.children.push({
          type: tr,
          children: [],
        });
        for (const cell of row) {
          (ast.children[ast.children.length - 1] as TElement).children.push({
            type: td,
            children: [{ type: paragraph, children: [{ text: cell }] }],
          });
        }
      }
    }
    return [
      {
        type: paragraph,
        children: [{ text: '' }],
      },
      ast,
      {
        type: paragraph,
        children: [{ text: '' }],
      },
    ];
  }
};
