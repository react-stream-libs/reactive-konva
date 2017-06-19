import {
  IContextBase,
  BaseRootRenderableType,
} from 'reactive-renderer';

import BaseRenderer from './BaseRenderer';
import { ICommonBlueprint } from '../ICommonBlueprint';
import {
  group,
  GroupBlueprint, GroupPropsType,
  GroupParentType,
} from '../components/group';

export default class GroupRenderer extends BaseRenderer<
  GroupBlueprint,
  GroupPropsType,
  IContextBase,
  GroupParentType
> {
  public topLevelComponent: typeof group;
  constructor(args: {
    instance: GroupBlueprint,
    key: string,
  }) {
    super({
      ...args,
      topLevelComponent: group,
    });
  }
  protected getFullKey(key: string) {
    return `__REACTIVE_KONVA_RENDERER_GROUP_INSTANCE__${key}`;
  }
}

export {
  group,
};

export type GroupRenderableType = BaseRootRenderableType<
  GroupBlueprint,
  ICommonBlueprint,
  IContextBase
>;
