import { Shape } from 'konva';
import { BaseFillType } from './base';

export const COLOR_FILL: 'COLOR_FILL' = 'COLOR_FILL';

export type ColorFillType = {
  __FillType: typeof COLOR_FILL,
  color: string,
} & BaseFillType;

export const color: (color: string) => ColorFillType = (color) => ({
  __FillType: 'COLOR_FILL',
  color,
});

export function apply(shape: Shape, fill: ColorFillType) {
  shape.fill(fill.color);
}