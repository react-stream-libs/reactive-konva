import {
  BaseRenderer as _BaseRenderer,
  renderChild,
  IContextBase,
  BasePropsType,
  BaseRootRenderableType,
  ComponentType,
} from 'reactive-renderer';
import { Blueprint, InstanceTreeType, IParentableBy } from '../tailored-reactive-renderer';

import { ICommonBlueprint } from '../ICommonBlueprint';
import {
  compact,
} from 'lodash';

abstract class BaseRenderer<
  TopLevelBlueprint extends Blueprint<PropsType, IContext>
      & IParentableBy<ParentBlueprint>
  , PropsType extends BasePropsType & Object
  , IContext extends IContextBase
  , ParentBlueprint extends Blueprint<BasePropsType, IContextBase>
> extends _BaseRenderer<
  TopLevelBlueprint, PropsType, ICommonBlueprint, IContext
> {
  public instanceTree: InstanceTreeType;
  protected abstract topLevelComponent: ComponentType<
    TopLevelBlueprint,
    ParentBlueprint,
    PropsType,
    ICommonBlueprint
  >;
  constructor(args: {
    instance: TopLevelBlueprint,
    key: string,
    topLevelComponent: ComponentType<
      TopLevelBlueprint,
      ParentBlueprint,
      PropsType,
      ICommonBlueprint
    >;
  }) {
    super();
    this.topLevelComponent = args.topLevelComponent;
    this.instanceTree = {
      key: this.getFullKey(args.key),
      instance: args.instance,
      childrenDict: {},
      childrenList: [],
      context: {
        __EXTENDS_ICONTEXT_BASE: null,
      }
    };
  }
  public render(
    toRender: BaseRootRenderableType<
        TopLevelBlueprint,
        ICommonBlueprint,
        IContext
      > | null,
    context: IContext,
    props: PropsType,
  ) {
    this.instanceTree.instance.applyInitialProps(props, context);
    const renderRoot = this.topLevelComponent(Object.assign({}, props, {
      key: this.getFullKey(props.key),
    }), compact([
      toRender,
    ]));
    renderChild(this.instanceTree, renderRoot, context);
  }
  public dispose() {
    this.instanceTree.instance.cleanUp();
    delete this.instanceTree.instance;
    delete this.instanceTree.childrenDict;
    delete this.instanceTree.childrenList;
    delete this.instanceTree;
  }
  protected abstract getFullKey(key: string): string;
}

export default BaseRenderer;
