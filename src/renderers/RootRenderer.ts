import {
  IContextBase,
  BaseRootRenderableType,
} from 'reactive-renderer';
import { ICommonBlueprint } from '../ICommonBlueprint';

import BaseRenderer from './BaseRenderer';
import {
  root,
  RootBlueprint, _RootPropsType,
  NoneExistentBlueprint,
} from '../components/root';

export default class RootRenderer extends BaseRenderer<
  RootBlueprint,
  _RootPropsType,
  IContextBase,
  NoneExistentBlueprint
> {
  public topLevelComponent: typeof root;
  constructor(args: {
    instance: RootBlueprint,
    key: string,
  }) {
    super({
      ...args,
      topLevelComponent: root,
    });
  }
  protected getFullKey(key: string) {
    return `__REACTIVE_KONVA_RENDERER_ROOT_INSTANCE__${key}`;
  }
}

export type RootRenderableType = BaseRootRenderableType<
  RootBlueprint,
  ICommonBlueprint,
  IContextBase
>;

export {
  root,
};
