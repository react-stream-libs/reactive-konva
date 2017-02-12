import { Shape } from 'konva';
import * as _ from 'lodash';
import { BaseFillType } from './base';

export const LINEAR_GRADIENT: 'LINEAR_GRADIENT' = 'LINEAR_GRADIENT';

export type LinearGradientFillProps = {
  startX: number, startY: number,
  endX: number, endY: number,
  colorPoints: Array<{
    point: number,
    color: string,
  }>,
};

export type LinearGradientFillType = {
  __FillType: typeof LINEAR_GRADIENT,
} & LinearGradientFillProps & BaseFillType;

export function linearGradient(args: LinearGradientFillProps): LinearGradientFillType {
  return {
    ...args,
    __FillType: LINEAR_GRADIENT,
  }
};

export function apply(shape: Shape, fill: LinearGradientFillType) {
  shape.fillLinearGradientStartPointX(fill.startX);
  shape.fillLinearGradientStartPointY(fill.startY);
  shape.fillLinearGradientEndPointX(fill.endX);
  shape.fillLinearGradientEndPointY(fill.endY);
  // FIXME: remove any after konva.d.ts fix.
  const colorPointsArray: any = _.flatten(
    fill.colorPoints.map(colorPoint => [colorPoint.point, colorPoint.color])
  );
  shape.fillLinearGradientColorStops(colorPointsArray)
}