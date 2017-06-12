import { Stage as KonvaStage } from 'konva';
import { BaseBlueprint, BasePropsType, RenderableType } from 'reactive-renderer';
import { Blueprint, IParentableBy, InstanceTreeType, _IParentableBy } from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { NodePropsType } from '../props/node';
import { RootBlueprint } from './root';
import { LayerBlueprint } from './layer';
export declare type _StagePropsType = {
    container?: HTMLElement;
} & NodePropsType & BasePropsType;
export declare class StageBlueprint extends Blueprint<_StagePropsType> implements IParentableBy<RootBlueprint> {
    node: KonvaStage;
    private prevProps;
    private parent;
    init(parent: RootBlueprint): void;
    attachChild(instance: LayerBlueprint): void;
    reorderChildren(oldChildrenList: InstanceTreeType[], oldChildrenDict: {
        [key: string]: InstanceTreeType;
    }, newChildrenList: InstanceTreeType[], newChildrenDict: {
        [key: string]: InstanceTreeType;
    }): void;
    applyInitialProps(props: _StagePropsType): void;
    updateBeforeChildren(props: _StagePropsType): void;
    updateAfterChildren(props: _StagePropsType): void;
    cleanUp(): void;
}
export declare const stage: (props: _StagePropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<StageBlueprint, ICommonBlueprintBase> & ICommonBlueprintBase, StageBlueprint, ICommonBlueprintBase>[]) => RenderableType<_StagePropsType, StageBlueprint & ICommonBlueprintBase, RootBlueprint & ICommonBlueprintBase, ICommonBlueprintBase>;
export default stage;
export { RenderableType, BaseBlueprint, _IParentableBy as IParentableBy, ICommonBlueprintBase };
