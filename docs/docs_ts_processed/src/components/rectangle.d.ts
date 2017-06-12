import { Rect as KonvaRectangle } from 'konva';
import { BasePropsType } from 'reactive-renderer';
import { Blueprint, BaseBlueprint, IParentableBy, _IParentableBy, InstanceTreeType, _RenderableType } from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { LayerBlueprint } from './layer';
import { GroupBlueprint } from './group';
import { StylePropsType } from '../props/style';
import { NodePropsType } from '../props/node';
export declare type RectangleParentType = LayerBlueprint & GroupBlueprint;
export declare type RectanglePropsType = {} & BasePropsType & StylePropsType & NodePropsType;
export declare class RectangleBlueprint extends Blueprint<RectanglePropsType> implements IParentableBy<RectangleParentType> {
    node: KonvaRectangle;
    prevProps: RectanglePropsType;
    private parent;
    init(parent: LayerBlueprint | GroupBlueprint): void;
    updateBeforeChildren(props: RectanglePropsType): void;
    updateAfterChildren(props: RectanglePropsType): void;
    reorderChildren(oldChildrenList: InstanceTreeType[], oldChildrenDict: {
        [key: string]: InstanceTreeType;
    }, newChildrenList: InstanceTreeType[], newChildrenDict: {
        [key: string]: InstanceTreeType;
    }): void;
    cleanUp(): void;
}
export declare const rectangle: (props: RectanglePropsType, children: _RenderableType<BasePropsType, BaseBlueprint<BasePropsType, ICommonBlueprintBase> & _IParentableBy<RectangleBlueprint, ICommonBlueprintBase> & ICommonBlueprintBase, RectangleBlueprint, ICommonBlueprintBase>[]) => _RenderableType<RectanglePropsType, RectangleBlueprint & ICommonBlueprintBase, LayerBlueprint & GroupBlueprint & ICommonBlueprintBase, ICommonBlueprintBase>;
export default rectangle;
export { _RenderableType, BaseBlueprint, _IParentableBy, ICommonBlueprintBase };
