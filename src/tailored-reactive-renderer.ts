import {
  Node,
} from 'konva';
import {
  BaseBlueprint,
  BasePropsType as _BasePropsType,
  IParentableBy as _IParentableBy,
  Renderable as _Renderable,
  createComponent as _createComponent,
  createComponentWithContext as _createComponentWithContext,
  ComponentType as _ComponentType,
  InstanceTreeType as _InstanceTreeType,
  IContextBase,
} from 'reactive-renderer';
import { ICommonBlueprint } from './ICommonBlueprint';

export type BasePropsType = {

} & _BasePropsType;
export abstract class Blueprint<
      PropsType extends BasePropsType
      , IContext extends IContextBase
    >
    extends BaseBlueprint<PropsType, ICommonBlueprint, IContext>
    implements ICommonBlueprint
{
  public __EXTENDS_ICOMMON_BLUEPRINT_BASE: null;
  public abstract node: Node;
}

export interface IParentableBy<
  _Blueprint extends Blueprint<any, IContextBase>
> extends _IParentableBy<_Blueprint, ICommonBlueprint> {

}

export class Renderable<
  PropsType extends BasePropsType,
  _Blueprint extends
    Blueprint<BasePropsType, IContext>,
  ParentableBy extends
    Blueprint<BasePropsType, IContextBase>,
  IContext extends IContextBase
> extends _Renderable<
  PropsType,
  _Blueprint,
  ParentableBy,
  ICommonBlueprint,
  IContext
> {}

export type ComponentType<
  BlueprintClass extends Blueprint<PropsType, IContextBase> &
    IParentableBy<ParentableTypes> &
    ICommonBlueprint,
  ParentableTypes extends Blueprint<BasePropsType, IContextBase>,
  PropsType extends BasePropsType,
> = _ComponentType<
  BlueprintClass
  , ParentableTypes
  , PropsType
  , ICommonBlueprint
>;

export function createComponent<
  BlueprintClass extends Blueprint<PropsType, IContextBase> &
    IParentableBy<ParentableTypes>
  ,
  ParentableTypes extends Blueprint<BasePropsType, IContextBase>,
  PropsType extends BasePropsType
>(
  blueprintClass: {
    new(): BlueprintClass & IParentableBy<ParentableTypes>
  },
) {
  return _createComponent<
    BlueprintClass,
    ParentableTypes,
    PropsType,
    ICommonBlueprint
  >(blueprintClass);
}

export function createComponentWithContext<
  BlueprintClass extends Blueprint<PropsType, IContextBase> &
    IParentableBy<ParentableTypes>
  ,
  ParentableTypes extends Blueprint<BasePropsType, IContextBase>,
  PropsType extends BasePropsType,
  IContext extends IContextBase
>(
  blueprintClass: {
    new(): BlueprintClass & IParentableBy<ParentableTypes>
  },
) {
  return _createComponentWithContext<
    BlueprintClass,
    ParentableTypes,
    PropsType,
    ICommonBlueprint,
    IContext
  >(blueprintClass);
}

export type InstanceTreeType = _InstanceTreeType<ICommonBlueprint>;

export {
  _BasePropsType,
  _Renderable,
  _IParentableBy,
  BaseBlueprint,
};
