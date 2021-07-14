export const content = Object.freeze([
  { type: 'p', children: [{ text: 'A' }] },
  {
    type: 'table',
    children: [
      {
        type: 'table_row',
        children: [
          { type: 'table_cell', children: [{ text: 'A1' }] },
          { type: 'table_cell', children: [{ text: 'B1' }] },
        ],
      },
      {
        type: 'table_row',
        children: [
          { type: 'table_cell', children: [{ text: 'A2' }] },
          { type: 'table_cell', children: [{ text: 'B2' }] },
        ],
      },
    ],
  },
  { type: 'p', children: [{ text: 'B' }] },
]) as any;

export const out = Object.freeze([
  { type: 'p', children: [{ text: 'A' }] },
  {
    type: 'table',
    children: [
      {
        type: 'table_row',
        children: [
          { type: 'table_cell', children: [{ text: '' }] },
          { type: 'table_cell', children: [{ text: '' }] },
        ],
      },
      {
        type: 'table_row',
        children: [
          { type: 'table_cell', children: [{ text: 'A2' }] },
          { type: 'table_cell', children: [{ text: 'B2' }] },
        ],
      },
    ],
  },
  { type: 'p', children: [{ text: 'B' }] },
]);

export const output2 = Object.freeze([
  { type: 'p', children: [{ text: 'A' }] },
  {
    type: 'table',
    children: [
      {
        type: 'table_row',
        children: [
          { type: 'table_cell', children: [{ text: '1' }] },
          { type: 'table_cell', children: [{ text: 'B1' }] },
        ],
      },
      {
        type: 'table_row',
        children: [
          { type: 'table_cell', children: [{ text: 'A2' }] },
          { type: 'table_cell', children: [{ text: 'B2' }] },
        ],
      },
    ],
  },
  { type: 'p', children: [{ text: 'B' }] },
]);
