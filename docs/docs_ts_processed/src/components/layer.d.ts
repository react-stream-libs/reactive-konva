import { Layer as KonvaLayer } from 'konva';
import { BasePropsType } from 'reactive-renderer';
import { Blueprint, BaseBlueprint, IParentableBy, _IParentableBy, _RenderableType, InstanceTreeType } from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { NodePropsType } from '../props/node';
import { StageBlueprint } from './stage';
export declare type LayerParentType = StageBlueprint;
export declare type LayerPropsType = {} & NodePropsType & BasePropsType;
export declare class LayerBlueprint extends Blueprint<BasePropsType> implements IParentableBy<LayerParentType> {
    node: KonvaLayer;
    prevProps: LayerPropsType;
    private parent;
    init(parent: StageBlueprint): void;
    addChild(): void;
    detachChildren(): void;
    reorderChildren(oldChildrenList: InstanceTreeType[], oldChildrenDict: {
        [key: string]: InstanceTreeType;
    }, newChildrenList: InstanceTreeType[], newChildrenDict: {
        [key: string]: InstanceTreeType;
    }): void;
    updateBeforeChildren(props: LayerPropsType): void;
    updateAfterChildren(props: LayerPropsType): void;
    cleanUp(): void;
}
export declare const layer: (props: LayerPropsType, children: _RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<LayerBlueprint, ICommonBlueprintBase> & ICommonBlueprintBase, LayerBlueprint, ICommonBlueprintBase>[]) => _RenderableType<LayerPropsType, LayerBlueprint & ICommonBlueprintBase, StageBlueprint & ICommonBlueprintBase, ICommonBlueprintBase>;
export default layer;
export { BaseBlueprint, _IParentableBy as IParentableBy, _RenderableType as RenderableType, ICommonBlueprintBase };
