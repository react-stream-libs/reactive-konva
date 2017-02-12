import { Shape } from 'konva';
import { applyStroke, StrokeType } from './stroke';
import { applyFill, BaseFillType } from './Fills';

export type StylePropsType = {
  stroke?: StrokeType,
  fill?: BaseFillType,
  opacity?: number,
  skewX?: number, skewY?: number,
}

export function applyStyleProps(shape: Shape, style: StylePropsType = {}) {
  debugger;
  style.fill ? applyFill(shape, style.fill) : null;
  applyStroke(shape, style.stroke || {});
  shape.opacity(style.opacity || 1);
  shape.skewX(style.skewX || 0);
  shape.skewY(style.skewY || 0);
}