import { Shape } from 'konva';
import { BaseFillType } from './base';
import {
  COLOR_FILL, ColorFillType,
  apply as applyColorFill,
  color,
} from './Color';

import {
  LINEAR_GRADIENT, LinearGradientFillType,
  apply as applyLinearGradientFill,
  linearGradient,
} from './LinearGradient';

export function applyFill(shape: Shape, fill: BaseFillType) {
  if (fill.__FillType === COLOR_FILL) {
    applyColorFill(shape, fill as ColorFillType);
    return;
  }
  if (fill.__FillType === LINEAR_GRADIENT) {
    applyLinearGradientFill(shape, fill as LinearGradientFillType);
    return;
  }
  console.error('invalid fill', fill);
  throw new Error(`invalid fill: ${fill}`);
}

export {
  BaseFillType,
  color,
  linearGradient,
}