import {
  flatten,
} from 'lodash';

import {
  Line as KonvaLine,
} from 'konva';

import {
  BasePropsType as ___BasePropsType,
  BaseBlueprint,
  IContextBase,
} from 'reactive-renderer';

import {
  Blueprint,
  IParentableBy, _IParentableBy,
  BasePropsType,
  createComponent,
  _RenderableType,
  InstanceTreeType,
} from '../tailored-reactive-renderer';
import { ICommonBlueprint } from '../ICommonBlueprint';

import { LayerBlueprint } from './layer';
import { GroupBlueprint } from './group';
import { applyStyleProps, StylePropsType } from '../props/style';
import { applyNodeProps, NodePropsType } from '../props/node';

export type LineParentType = LayerBlueprint & GroupBlueprint;

export type LinePointType = [number, number];
export type LinePropsType = {
  points: LinePointType[],
  lineJoin?: 'round' | 'meter' | 'bevel',
  closed?: boolean,
  tension?: number,
}
& StylePropsType
& NodePropsType
& BasePropsType
;

export class LineBlueprint extends Blueprint<LinePropsType, IContextBase>
    implements IParentableBy<LineParentType> {
  public node: KonvaLine;
  private parent: LayerBlueprint | GroupBlueprint;
  public init(parent: LineParentType) {
    this.node = new KonvaLine({
      points: [],
    });
    this.parent = parent;
    this.parent.node.add(this.node);
  }
  public updateBeforeChildren(props: LinePropsType) {
    const linePoints = flatten(props.points);
    const { node } = this;
    node.points(linePoints);
    applyStyleProps(node, props);
    applyNodeProps(node, props);
  }
  public updateAfterChildren(props: LinePropsType) {
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

export const line = createComponent<LineBlueprint, LineParentType, LinePropsType>(LineBlueprint);

export default line;

export {
  BaseBlueprint,
  _IParentableBy,
  _RenderableType,
  ICommonBlueprint,
  ___BasePropsType,
};
