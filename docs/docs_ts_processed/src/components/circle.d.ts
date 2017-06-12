import { Circle as KonvaCircle } from 'konva';
import { BaseBlueprint, BasePropsType, Blueprint, IParentableBy, _IParentableBy, _RenderableType, InstanceTreeType } from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { LayerBlueprint } from './layer';
import { StylePropsType } from '../props/style';
import { NodePropsType } from '../props/node';
export declare type CircleParentType = LayerBlueprint;
export declare type CirclePropsType = {
    radius: number;
    blurRadius?: number;
} & BasePropsType & StylePropsType & NodePropsType;
export declare class CircleBlueprint extends Blueprint<BasePropsType> implements IParentableBy<CircleParentType> {
    node: KonvaCircle;
    private parent;
    init(parent: LayerBlueprint): void;
    updateBeforeChildren(props: CirclePropsType): void;
    updateAfterChildren(props: CirclePropsType): void;
    reorderChildren(oldChildrenList: InstanceTreeType[], oldChildrenDict: {
        [key: string]: InstanceTreeType;
    }, newChildrenList: InstanceTreeType[], newChildrenDict: {
        [key: string]: InstanceTreeType;
    }): void;
    cleanUp(): void;
}
export declare const circle: (props: CirclePropsType, children: _RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<CircleBlueprint, ICommonBlueprintBase> & ICommonBlueprintBase, CircleBlueprint, ICommonBlueprintBase>[]) => _RenderableType<CirclePropsType, CircleBlueprint & ICommonBlueprintBase, LayerBlueprint & ICommonBlueprintBase, ICommonBlueprintBase>;
export default circle;
export { _RenderableType, _IParentableBy, BaseBlueprint, ICommonBlueprintBase };
