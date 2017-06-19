import {
  IContextBase,
} from 'reactive-renderer';

import GroupRenderer, {
  GroupRenderableType,
} from '../renderers/GroupRenderer';

import {
  GroupBlueprint,
  GroupParentType,
  GroupPropsType,
} from './group';

abstract class GroupBasedCustomBlueprint<
  PropsType extends GroupPropsType
  , IContext extends IContextBase
> extends GroupBlueprint {
  protected renderer: GroupRenderer;
  public init(parent: GroupParentType) {
    super.init(parent);
    this.renderer = new GroupRenderer({
      instance: this,
      key: '',
    });
  }

  public updateAfterChildren(props: PropsType, context: IContext) {
    super.updateAfterChildren(props);
    const renderable = this.render(props, context);
    this.renderer.render(renderable, context, props);
  }
  protected abstract render(props: PropsType, context: IContext): GroupRenderableType;
}

export default GroupBasedCustomBlueprint;
