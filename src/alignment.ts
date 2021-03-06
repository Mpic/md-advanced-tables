/**
 * Represents column alignment.
 *
 * - `Alignment.NONE` - Use default alignment.
 * - `Alignment.LEFT` - Align left.
 * - `Alignment.RIGHT` - Align right.
 * - `Alignment.CENTER` - Align center.
 *
 */
export enum Alignment {
  NONE = 'none',
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

/**
 * Represents default column alignment
 *
 * - `DefaultAlignment.LEFT` - Align left.
 * - `DefaultAlignment.RIGHT` - Align right.
 * - `DefaultAlignment.CENTER` - Align center.
 *
 */
export enum DefaultAlignment {
  LEFT = Alignment.LEFT,
  RIGHT = Alignment.RIGHT,
  CENTER = Alignment.CENTER,
}

/**
 * Represents alignment of header cells.
 *
 * - `HeaderAlignment.FOLLOW` - Follow column's alignment.
 * - `HeaderAlignment.LEFT` - Align left.
 * - `HeaderAlignment.RIGHT` - Align right.
 * - `HeaderAlignment.CENTER` - Align center.
 *
 */
export enum HeaderAlignment {
  FOLLOW = 'follow',
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}
