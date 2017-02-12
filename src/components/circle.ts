import {
  Circle as KonvaCircle,
} from 'konva';

import {
  BaseBlueprint,
  BasePropsType,
  Blueprint,
  createComponent,
  IParentableBy, _IParentableBy,
  _RenderableType,
  InstanceTreeType,
} from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';

import { LayerBlueprint } from './layer';
import { applyStyleProps, StylePropsType } from '../props/style';
import { applyNodeProps, NodePropsType } from '../props/node';

export type CircleParentType = LayerBlueprint;

export type CirclePropsType = {
  radius: number,
  blurRadius?: number,
}
& BasePropsType
& StylePropsType
& NodePropsType
;

export class CircleBlueprint extends Blueprint<BasePropsType>
    implements IParentableBy<CircleParentType> {
  public node: KonvaCircle;
  private parent: LayerBlueprint;
  public init(parent: LayerBlueprint) {
    this.node = new KonvaCircle({
      radius: 0,
    });
    this.parent = parent;
    this.parent.node.add(this.node);
  }
  public updateBeforeChildren(props: CirclePropsType) {
    const { node } = this;
    node.radius(props.radius);
    node.blurRadius(props.blurRadius || 0);
    applyStyleProps(node, props);
    applyNodeProps(node, props);
  }
  public updateAfterChildren(props: CirclePropsType) {
  }
  public reorderChildren(
    oldChildrenList: InstanceTreeType[],
    oldChildrenDict: { [key: string]: InstanceTreeType },
    newChildrenList: InstanceTreeType[],
    newChildrenDict: { [key: string]: InstanceTreeType }
  ) { }
  public cleanUp() {
    this.node.destroy();
  }
}

export const circle = createComponent<CircleBlueprint, CircleParentType, CirclePropsType>(CircleBlueprint);

export default circle;

export {
  _RenderableType,
  _IParentableBy,
  BaseBlueprint,
  ICommonBlueprintBase,
};
