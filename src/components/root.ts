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

import {
  IContextBase,
  BasePropsType as ___BasePropsType,
} from 'reactive-renderer';
import { ICommonBlueprint } from '../ICommonBlueprint';

export type _RootPropsType = {
  width: number, height: number,
  x?: number, y?: number,
} & BasePropsType;

export class NoneExistentNode extends Node { }
export class NoneExistentBlueprint
    extends Blueprint<BasePropsType, IContextBase> {
  public node: NoneExistentNode;
  public reorderChildren() {}
  public init(parent: Blueprint<BasePropsType, IContextBase>) {}
  public updateBeforeChildren(props: BasePropsType) {}
  public updateAfterChildren(props: BasePropsType) {}
  public cleanUp() {}
}

/**
 * For internal use
 */
export class RootBlueprint extends Blueprint<_RootPropsType, IContextBase>
    implements IParentableBy<NoneExistentBlueprint>, ICommonBlueprint {
  public __EXTENDS_ICOMMON_BLUEPRINT_BASE: null;
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
  ___BasePropsType,
};
