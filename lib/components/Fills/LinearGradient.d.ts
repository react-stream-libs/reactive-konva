import { Shape } from 'konva';
import { BaseFillType } from './base';
export declare const LINEAR_GRADIENT: 'LINEAR_GRADIENT';
export declare type LinearGradientFillProps = {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    colorPoints: Array<{
        point: number;
        color: string;
    }>;
};
export declare type LinearGradientFillType = {
    __FillType: typeof LINEAR_GRADIENT;
} & LinearGradientFillProps & BaseFillType;
export declare function linearGradient(args: LinearGradientFillProps): LinearGradientFillType;
export declare function apply(shape: Shape, fill: LinearGradientFillType): void;
