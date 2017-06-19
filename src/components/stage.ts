import {
  forEach,
} from 'lodash';
import { Stage as KonvaStage } from 'konva';

import {
  BaseBlueprint,
  BasePropsType,
  RenderableType,
  IContextBase,
} from 'reactive-renderer';

import {
  createComponent,
  Blueprint,
  IParentableBy,
  InstanceTreeType,
  _IParentableBy,
} from '../tailored-reactive-renderer';
import { ICommonBlueprint } from '../ICommonBlueprint';
import { NodePropsType, applyNodeProps } from '../props/node';

import { RootBlueprint } from './root';
import { LayerBlueprint } from './layer';

export type _StagePropsType = {
  container?: HTMLElement,
} & NodePropsType
  & BasePropsType;

export class StageBlueprint extends Blueprint<_StagePropsType, IContextBase>
    implements IParentableBy<RootBlueprint> {
  public node: KonvaStage;
  private prevProps: _StagePropsType;
  private parent: RootBlueprint;
  public init(parent: RootBlueprint) {
    this.parent = parent;
  }
  public attachChild(instance: LayerBlueprint) {
    this.node.add(instance.node);
  } // nothing to do: Stage is de facto 'root' component. \
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
        if (newChild.instance instanceof LayerBlueprint) {
          this.node.add(newChild.instance.node);
        }
      }
    );
  }
  public applyInitialProps(props: _StagePropsType) {

  }
  public updateBeforeChildren(props: _StagePropsType) {
    if (!this.prevProps) {
      if (!props.container) {
        this.node = new KonvaStage({
          container: this.parent.container,
        });
      } else {
        this.node = new KonvaStage({
          container: props.container,
        });
      }
    }
    applyNodeProps(this.node, props);
    if (this.prevProps && this.prevProps.container !== props.container) {
      this.node.setContainer(props.container);
    }
  }
  public updateAfterChildren(props: _StagePropsType) {
    this.node.batchDraw();
    this.prevProps = props;
  }
  public cleanUp() {
    this.node.destroyChildren();
    this.node.destroy();
  }
}

export const stage = createComponent<StageBlueprint, RootBlueprint, _StagePropsType>(StageBlueprint);

export default stage;

export {
  RenderableType,
  BaseBlueprint,
  _IParentableBy as IParentableBy,
  ICommonBlueprint,
};
