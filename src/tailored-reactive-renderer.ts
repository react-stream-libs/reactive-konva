import {
  Node,
} from 'konva';
import {
  BaseBlueprint,
  BasePropsType,
  BaseRootRenderableType,
  IParentableBy as _IParentableBy,
  RenderableType as _RenderableType,
  createComponent as _createComponent,
  InstanceTreeType as _InstanceTreeType,
  IContextBase,
} from 'reactive-renderer';
import { ICommonBlueprint } from './ICommonBlueprint';
import { RootBlueprint } from './components/root';

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

export type RenderableType<
  PropsType extends BasePropsType,
  _Blueprint extends
    Blueprint<BasePropsType, IContext>,
  ParentableBy extends
    Blueprint<BasePropsType, IContextBase>,
  IContext extends IContextBase
> = _RenderableType<
  PropsType,
  _Blueprint,
  ParentableBy,
  ICommonBlueprint,
  IContext
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

export type InstanceTreeType = _InstanceTreeType<ICommonBlueprint>;

export type RootRenderableType = BaseRootRenderableType<
  RootBlueprint,
  ICommonBlueprint,
  IContextBase
>;


export {
  BasePropsType,
  _RenderableType,
  _IParentableBy,
  BaseBlueprint,
};
