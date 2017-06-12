import { Node, Filters } from 'konva';
export declare type NodePropsType = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    scaleX?: number;
    scaleY?: number;
    opacity?: number;
    filters?: Filters[];
    rotationDegrees?: number;
};
export declare function applyNodeProps(node: Node, nodeProps: NodePropsType): void;
