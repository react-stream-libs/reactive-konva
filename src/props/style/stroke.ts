import {
  Shape,
} from 'konva';

export type StrokeType = {
  disableScale?: boolean,
  disabled?: boolean,
  disableShadow?: boolean,
  color?: string,
  width?: number,
};

export function applyStroke(shape: Shape, stroke: StrokeType) {
  shape.stroke(stroke.color || '#000000');
  shape.strokeWidth(stroke.width || 1);
}
