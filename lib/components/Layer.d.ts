import { Layer as KonvaLayer, Filter } from 'konva';
import { _Root } from './Root';
import { BaseBlueprint, BasePropsType, IParentableBy, RenderableType } from 'reactive-renderer';
export declare type LayerParentType = _Root & _Layer;
export declare type LayerPropsType = {
    x?: number;
    y?: number;
    filters?: Array<Filter>;
    rotationDegrees?: number;
    scaleX?: number;
    scaleY?: number;
    opacity?: number;
} & BasePropsType;
export declare class _Layer extends BaseBlueprint<BasePropsType> implements IParentableBy<LayerParentType> {
    layer: KonvaLayer;
    parent: _Root;
    prevProps: LayerPropsType;
    init(parent: _Root): void;
    updateBeforeChildren(props: LayerPropsType): void;
    updateAfterChildren(props: LayerPropsType): void;
    delete(): void;
}
export declare const Layer: (props: LayerPropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Layer>, _Layer>[]) => RenderableType<LayerPropsType, _Layer, LayerParentType>;
export default Layer;
export { RenderableType, BaseBlueprint };
