import {
  Node,
} from 'konva';
import {
  BaseBlueprint,
  Blueprint,
  BasePropsType,
  createComponent,
  IParentableBy,
  _IParentableBy,
  _RenderableType,
} from '../tailored-reactive-renderer';

import { ICommonBlueprintBase } from '../ICommonBlueprintBase';

export type _RootPropsType = {
  width: number, height: number,
  x?: number, y?: number,
} & BasePropsType;

export class NoneExistentNode extends Node { }
export class NoneExistentBlueprint
    extends Blueprint<BasePropsType> {
  public node: NoneExistentNode;
  public reorderChildren() {}
  public init(parent: Blueprint<BasePropsType>) {}
  public updateBeforeChildren(props: BasePropsType) {}
  public updateAfterChildren(props: BasePropsType) {}
  public cleanUp() {}
}

/**
 * For internal use
 */
export class RootBlueprint extends Blueprint<_RootPropsType>
    implements IParentableBy<NoneExistentBlueprint>, ICommonBlueprintBase {

  public container: HTMLElement;
  public node: NoneExistentNode;
  constructor(container?: HTMLElement) {
    super();
    this.container = container;
  }
  public reorderChildren() {}
  public init(parent: NoneExistentBlueprint) {
  }
  public updateBeforeChildren(props: _RootPropsType) {
  }
  public updateAfterChildren(props: BasePropsType) {
  }
  public cleanUp() {
  }
}

export const root = createComponent<RootBlueprint, NoneExistentBlueprint, _RootPropsType>(RootBlueprint);

export default root;

export {
  _RenderableType as RenderableType,
  _IParentableBy as IParentableBy,
  BaseBlueprint,
};
