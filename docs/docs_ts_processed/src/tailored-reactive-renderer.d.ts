import { Node } from 'konva';
import { BaseBlueprint, BasePropsType, BaseRootRenderableType, IParentableBy as _IParentableBy, RenderableType as _RenderableType, InstanceTreeType as _InstanceTreeType } from 'reactive-renderer';
import { ICommonBlueprintBase } from './ICommonBlueprintBase';
import { RootBlueprint } from './components/root';
export declare abstract class Blueprint<PropsType extends BasePropsType> extends BaseBlueprint<PropsType, ICommonBlueprintBase> implements ICommonBlueprintBase {
    abstract node: Node;
}
export interface IParentableBy<_Blueprint extends Blueprint<any>> extends _IParentableBy<_Blueprint, ICommonBlueprintBase> {
}
export declare type RenderableType<PropsType extends BasePropsType, _Blueprint extends Blueprint<BasePropsType>, ParentableBy extends Blueprint<BasePropsType>> = _RenderableType<PropsType, _Blueprint, ParentableBy, ICommonBlueprintBase>;
export declare function createComponent<BlueprintClass extends Blueprint<PropsType> & IParentableBy<ParentableTypes>, ParentableTypes extends Blueprint<BasePropsType>, PropsType extends BasePropsType>(blueprintClass: {
    new (): BlueprintClass & IParentableBy<ParentableTypes>;
}): (props: PropsType, children: _RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<BlueprintClass, ICommonBlueprintBase> & ICommonBlueprintBase, BlueprintClass, ICommonBlueprintBase>[]) => _RenderableType<PropsType, BlueprintClass & ICommonBlueprintBase, ParentableTypes & ICommonBlueprintBase, ICommonBlueprintBase>;
export declare type InstanceTreeType = _InstanceTreeType<ICommonBlueprintBase>;
export declare type RootRenderableType = BaseRootRenderableType<RootBlueprint, ICommonBlueprintBase>;
export { BasePropsType, _RenderableType, _IParentableBy, BaseBlueprint };
