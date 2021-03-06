export { Point } from './point';
export { Range } from './range';
export { Focus } from './focus';
export { Alignment, DefaultAlignment, HeaderAlignment } from './alignment';
export { TableCell } from './table-cell';
export { TableRow } from './table-row';
export { Table } from './table';
export { readTable } from './parser';
export {
  FormatType,
  completeTable,
  formatTable,
  alterAlignment,
  insertRow,
  deleteRow,
  moveRow,
  insertColumn,
  deleteColumn,
  moveColumn,
} from './formatter.js';
export {
  Insert,
  Delete,
  applyEditScript,
  shortestEditScript,
} from './edit-script';
export { ITextEditor } from './text-editor';
export { Options, defaultOptions, optionsWithDefaults } from './options';
export { TableEditor, SortOrder } from './table-editor';
