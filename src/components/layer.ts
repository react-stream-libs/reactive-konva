import {
  Layer as KonvaLayer,
} from 'konva';
import {
  forEach,
} from 'lodash';
import {
  BasePropsType,
} from 'reactive-renderer';

import {
  Blueprint, BaseBlueprint,
  createComponent,
  IParentableBy, _IParentableBy,
  _RenderableType,
  InstanceTreeType,
} from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { NodePropsType, applyNodeProps } from '../props/node';

import { StageBlueprint } from './stage';

export type LayerParentType = StageBlueprint;

export type LayerPropsType = {
} & NodePropsType
 & BasePropsType;

export class LayerBlueprint extends Blueprint<BasePropsType>
    implements IParentableBy<LayerParentType> {
  public node: KonvaLayer;
  public prevProps: LayerPropsType;
  private parent: StageBlueprint;
  public init(parent: StageBlueprint) {
    this.node = new KonvaLayer();
    this.parent = parent;
    parent.node.add(this.node);
  }
  public addChild() {
  }
  public detachChildren() {
    this.node.remove();
  }
  public reorderChildren(
    oldChildrenList: InstanceTreeType[],
    oldChildrenDict: { [key: string]: InstanceTreeType },
    newChildrenList: InstanceTreeType[],
    newChildrenDict: { [key: string]: InstanceTreeType }
  ) {
    this.node.removeChildren();
    forEach(
      newChildrenList,
      newChild => this.node.add(newChild.instance.node)
    );
  }
  public updateBeforeChildren(props: LayerPropsType) {
  }
  public updateAfterChildren(props: LayerPropsType) {
    applyNodeProps(this.node, props);
    this.node.batchDraw();
  }
  public cleanUp() {
    this.node.destroyChildren();
    this.node.destroy();
  }
}

export const layer = createComponent<LayerBlueprint, LayerParentType, LayerPropsType>(LayerBlueprint);

export default layer;

export {
  BaseBlueprint,
  _IParentableBy as IParentableBy,
  _RenderableType as RenderableType,
  ICommonBlueprintBase,
};
