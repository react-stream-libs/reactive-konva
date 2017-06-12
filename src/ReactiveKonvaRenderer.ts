import {
  BaseRenderer,
  renderChild,
  IContextBase,
} from 'reactive-renderer';
import {
  RootRenderableType,
  InstanceTreeType,
} from './tailored-reactive-renderer';

import root, { RootBlueprint, _RootPropsType } from './components/root';
import { ICommonBlueprint } from './ICommonBlueprint';
import {
  compact,
} from 'lodash';

/**
 * ReactiveKonva Renderer.
 * Usage:...
 *
 * @export
 * @class ReactiveKonvaRenderer
 * @extends {BaseRenderer<_Root, _RootPropsType>}
 */
export default class ReactiveKonvaRenderer extends BaseRenderer<
  RootBlueprint, _RootPropsType, ICommonBlueprint, IContextBase
> {
  public instanceTree: InstanceTreeType;
  constructor(args: {
    container: HTMLElement,
  }) {
    super();
    this.instanceTree = {
      key: '__REACTIVE_KONVA_RENDERER_ROOT_INSTANCE__',
      instance: new RootBlueprint(args.container),
      childrenDict: {},
      childrenList: [],
      context: {
        __EXTENDS_ICONTEXT_BASE: null,
      }
    };
  }
  public render(
    toRender: RootRenderableType | null,
    context: IContextBase,
    rootProps: _RootPropsType,
  ) {
    this.instanceTree.instance.applyInitialProps(rootProps, context);
    this.instanceTree.instance.updateBeforeChildren(rootProps, context);
    const renderRoot = root({
      key: '__ROOT__',
      ...rootProps,
    }, compact([
      toRender,
    ]));
    renderChild(this.instanceTree, renderRoot, context);
    this.instanceTree.instance.updateAfterChildren(rootProps, context);
  }
  public dispose() {
    this.instanceTree.instance.cleanUp();
    delete this.instanceTree.instance;
    delete this.instanceTree.childrenDict;
    delete this.instanceTree.childrenList;
    delete this.instanceTree;
  }
}
