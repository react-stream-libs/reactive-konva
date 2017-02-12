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
} from 'reactive-renderer';
import { ICommonBlueprintBase } from './ICommonBlueprintBase';
import { RootBlueprint } from './components/root';

export abstract class Blueprint<PropsType extends BasePropsType>
  extends BaseBlueprint<PropsType, ICommonBlueprintBase>
  implements ICommonBlueprintBase {
  public abstract node: Node;
}

export interface IParentableBy<
  _Blueprint extends Blueprint<any>
> extends _IParentableBy<_Blueprint, ICommonBlueprintBase> {

}

export type RenderableType<
  PropsType extends BasePropsType,
  _Blueprint extends
    Blueprint<BasePropsType>,
  ParentableBy extends
    Blueprint<BasePropsType>
> = _RenderableType<PropsType, _Blueprint, ParentableBy, ICommonBlueprintBase>;


export function createComponent<
  BlueprintClass extends Blueprint<PropsType> &
    IParentableBy<ParentableTypes>
  ,
  ParentableTypes extends Blueprint<BasePropsType>,
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
    ICommonBlueprintBase
  >(blueprintClass);
}

export type InstanceTreeType = _InstanceTreeType<ICommonBlueprintBase>;

export type RootRenderableType = BaseRootRenderableType<
  RootBlueprint,
  ICommonBlueprintBase
>;


export {
  BasePropsType,
  _RenderableType,
  _IParentableBy,
  BaseBlueprint,
};
