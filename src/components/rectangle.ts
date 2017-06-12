import {
  Rect as KonvaRectangle,
} from 'konva';

import {
  BasePropsType,
  IContextBase,
} from 'reactive-renderer';

import {
  Blueprint, BaseBlueprint,
  IParentableBy, _IParentableBy,
  createComponent,
  InstanceTreeType,
  _RenderableType,
} from '../tailored-reactive-renderer';
import { ICommonBlueprint } from '../ICommonBlueprint';

import { LayerBlueprint } from './layer';
import { GroupBlueprint } from './group';
import { applyStyleProps, StylePropsType } from '../props/style';
import { applyNodeProps, NodePropsType } from '../props/node';

export type RectangleParentType = LayerBlueprint & GroupBlueprint;

export type RectanglePropsType = {
}
& BasePropsType
& StylePropsType
& NodePropsType
;

export class RectangleBlueprint extends Blueprint<RectanglePropsType, IContextBase>
    implements IParentableBy<RectangleParentType> {
  public node: KonvaRectangle;
  public prevProps: RectanglePropsType;
  private parent: LayerBlueprint | GroupBlueprint;
  public init(parent: LayerBlueprint | GroupBlueprint) {
    this.node = new KonvaRectangle({});
    this.parent = parent;
    this.parent.node.add(this.node);
  }

  public updateBeforeChildren(props: RectanglePropsType) {
    const { node } = this;
    applyStyleProps(node, props);
    applyNodeProps(node, props);
  }
  public updateAfterChildren(props: RectanglePropsType) {
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

export const rectangle = createComponent<
  RectangleBlueprint, RectangleParentType, RectanglePropsType
>(RectangleBlueprint);

export default rectangle;

export {
  _RenderableType,
  BaseBlueprint,
  _IParentableBy,
  ICommonBlueprint,
};
