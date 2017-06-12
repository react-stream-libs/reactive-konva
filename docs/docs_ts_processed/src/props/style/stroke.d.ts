import { Shape } from 'konva';
export declare type StrokeType = {
    disableScale?: boolean;
    disable?: boolean;
    disableShadow?: boolean;
    color?: string;
    width?: number;
};
export declare function applyStroke(shape: Shape, stroke: StrokeType): void;
