import { Rect as KonvaRectangle, Filter } from 'konva';
import { BaseBlueprint, BasePropsType, IParentableBy, RenderableType } from 'reactive-renderer';
import { _Layer } from './Layer';
import { BaseFillType } from './Fills';
export declare type RectangleParentType = _Layer;
export declare type RectanglePropsType = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    skewX?: number;
    skewY?: number;
    filters?: Array<Filter>;
    fill?: BaseFillType;
    opacity?: number;
} & BasePropsType;
export declare class _Rectangle extends BaseBlueprint<BasePropsType> implements IParentableBy<RectangleParentType> {
    rect: KonvaRectangle;
    parent: _Layer;
    prevProps: RectanglePropsType;
    init(parent: _Layer): void;
    updateBeforeChildren(props: RectanglePropsType): void;
    updateAfterChildren(props: RectanglePropsType): void;
    delete(): void;
}
export declare const Rectangle: (props: RectanglePropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Rectangle>, _Rectangle>[]) => RenderableType<RectanglePropsType, _Rectangle, _Layer>;
export default Rectangle;
export { RenderableType, BaseBlueprint };
