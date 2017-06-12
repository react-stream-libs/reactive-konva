import { Group as KonvaGroup } from 'konva';
import { Blueprint, InstanceTreeType, IParentableBy, _IParentableBy } from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { LayerBlueprint } from './layer';
import { BaseBlueprint, BasePropsType, RenderableType } from 'reactive-renderer';
import { NodePropsType } from '../props/node';
export declare type GroupParentType = LayerBlueprint & GroupBlueprint;
export declare type GroupPropsType = {} & NodePropsType & BasePropsType;
export declare class GroupBlueprint extends Blueprint<GroupPropsType> implements IParentableBy<GroupParentType> {
    node: KonvaGroup;
    prevProps: GroupPropsType;
    private parent;
    init(parent: LayerBlueprint | GroupBlueprint): void;
    updateBeforeChildren(props: GroupPropsType): void;
    updateAfterChildren(props: GroupPropsType): void;
    reorderChildren(oldChildrenList: InstanceTreeType[], oldChildrenDict: {
        [key: string]: InstanceTreeType;
    }, newChildrenList: InstanceTreeType[], newChildrenDict: {
        [key: string]: InstanceTreeType;
    }): void;
    cleanUp(): void;
}
export declare const group: (props: NodePropsType & BasePropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<GroupBlueprint, ICommonBlueprintBase> & ICommonBlueprintBase, GroupBlueprint, ICommonBlueprintBase>[]) => RenderableType<NodePropsType & BasePropsType, GroupBlueprint & ICommonBlueprintBase, LayerBlueprint & GroupBlueprint & ICommonBlueprintBase, ICommonBlueprintBase>;
export default group;
export { RenderableType, _IParentableBy, BaseBlueprint, ICommonBlueprintBase };
