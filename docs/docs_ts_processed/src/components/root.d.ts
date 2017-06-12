import { Node } from 'konva';
import { BaseBlueprint, Blueprint, BasePropsType, IParentableBy, _IParentableBy, _RenderableType } from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
export declare type _RootPropsType = {
    width: number;
    height: number;
    x?: number;
    y?: number;
} & BasePropsType;
export declare class NoneExistentNode extends Node {
}
export declare class NoneExistentBlueprint extends Blueprint<BasePropsType> {
    node: NoneExistentNode;
    reorderChildren(): void;
    init(parent: Blueprint<BasePropsType>): void;
    updateBeforeChildren(props: BasePropsType): void;
    updateAfterChildren(props: BasePropsType): void;
    cleanUp(): void;
}
/**
 * For internal use
 */
export declare class RootBlueprint extends Blueprint<_RootPropsType> implements IParentableBy<NoneExistentBlueprint>, ICommonBlueprintBase {
    container: HTMLElement;
    node: NoneExistentNode;
    constructor(container?: HTMLElement);
    reorderChildren(): void;
    init(parent: NoneExistentBlueprint): void;
    updateBeforeChildren(props: _RootPropsType): void;
    updateAfterChildren(props: BasePropsType): void;
    cleanUp(): void;
}
export declare const root: (props: _RootPropsType, children: _RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<RootBlueprint, ICommonBlueprintBase> & ICommonBlueprintBase, RootBlueprint, ICommonBlueprintBase>[]) => _RenderableType<_RootPropsType, RootBlueprint & ICommonBlueprintBase, NoneExistentBlueprint & ICommonBlueprintBase, ICommonBlueprintBase>;
export default root;
export { _RenderableType as RenderableType, _IParentableBy as IParentableBy, BaseBlueprint };
