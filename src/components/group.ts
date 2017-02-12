import {
  Group as KonvaGroup,
} from 'konva';
import {
  forEach,
} from 'lodash';

import {
  Blueprint,
  InstanceTreeType,
  IParentableBy, _IParentableBy,
  createComponent,
} from '../tailored-reactive-renderer';
import { ICommonBlueprintBase } from '../ICommonBlueprintBase';
import { LayerBlueprint } from './layer';
import {
  BaseBlueprint,
  BasePropsType,
  RenderableType,
} from 'reactive-renderer';

import { NodePropsType, applyNodeProps } from '../props/node';

export type GroupParentType = LayerBlueprint & GroupBlueprint;

export type GroupPropsType = {
} & NodePropsType
  & BasePropsType;

export class GroupBlueprint extends Blueprint<GroupPropsType>
    implements IParentableBy<GroupParentType> {
  public node: KonvaGroup;
  public prevProps: GroupPropsType;
  private parent: LayerBlueprint | GroupBlueprint;
  public init(parent: LayerBlueprint | GroupBlueprint) {
    this.node = new KonvaGroup();
    this.parent = parent;
    parent.node.add(this.node);
  }

  public updateBeforeChildren(props: GroupPropsType) {
  }
  public updateAfterChildren(props: GroupPropsType) {
    applyNodeProps(this.node, props);
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
      newChild => {
        // const instance = newChild.instance;
        this.node.add(newChild.instance.node);
      }
    );
  }
  public cleanUp() {
    this.node.destroyChildren();
    this.node.destroy();
  }
}

export const group = createComponent<GroupBlueprint, GroupParentType, GroupPropsType>(GroupBlueprint);

export default group;

export {
  RenderableType,
  _IParentableBy,
  BaseBlueprint,
  ICommonBlueprintBase,
};
