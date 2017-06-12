import { Line as KonvaLine } from 'konva';
import { BaseBlueprint } from 'reactive-renderer';
import { Blueprint, IParentableBy, _IParentableBy, BasePropsType, _RenderableType, InstanceTreeType } from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { LayerBlueprint } from './layer';
import { GroupBlueprint } from './group';
import { StylePropsType } from '../props/style';
import { NodePropsType } from '../props/node';
export declare type LineParentType = LayerBlueprint & GroupBlueprint;
export declare type LinePointType = [number, number];
export declare type LinePropsType = {
    points: LinePointType[];
    lineJoin?: 'round' | 'meter' | 'bevel';
    closed?: boolean;
    tension?: number;
} & StylePropsType & NodePropsType & BasePropsType;
export declare class LineBlueprint extends Blueprint<LinePropsType> implements IParentableBy<LineParentType> {
    node: KonvaLine;
    private parent;
    init(parent: LineParentType): void;
    updateBeforeChildren(props: LinePropsType): void;
    updateAfterChildren(props: LinePropsType): void;
    reorderChildren(oldChildrenList: InstanceTreeType[], oldChildrenDict: {
        [key: string]: InstanceTreeType;
    }, newChildrenList: InstanceTreeType[], newChildrenDict: {
        [key: string]: InstanceTreeType;
    }): void;
    cleanUp(): void;
}
export declare const line: (props: LinePropsType, children: _RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<LineBlueprint, ICommonBlueprintBase> & ICommonBlueprintBase, LineBlueprint, ICommonBlueprintBase>[]) => _RenderableType<LinePropsType, LineBlueprint & ICommonBlueprintBase, LayerBlueprint & GroupBlueprint & ICommonBlueprintBase, ICommonBlueprintBase>;
export default line;
export { BaseBlueprint, _IParentableBy, _RenderableType, ICommonBlueprintBase };
