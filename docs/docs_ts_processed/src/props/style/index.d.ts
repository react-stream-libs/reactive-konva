import { Shape } from 'konva';
import { StrokeType } from './stroke';
import { BaseFillType } from './Fills';
export declare type StylePropsType = {
    stroke?: StrokeType;
    fill?: BaseFillType;
    opacity?: number;
    skewX?: number;
    skewY?: number;
};
export declare function applyStyleProps(shape: Shape, style?: StylePropsType): void;
