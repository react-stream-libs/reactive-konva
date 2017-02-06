import { Shape } from 'konva';
import { BaseFillType } from './base';
export declare const COLOR_FILL: 'COLOR_FILL';
export declare type ColorFillType = {
    __FillType: typeof COLOR_FILL;
    color: string;
} & BaseFillType;
export declare const color: (color: string) => ColorFillType;
export declare function apply(shape: Shape, fill: ColorFillType): void;
