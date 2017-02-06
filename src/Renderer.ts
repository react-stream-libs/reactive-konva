import {
  BaseRenderer,
  BaseRootRenderableType,
  renderChild,
  InstanceTreeType,
} from 'reactive-renderer';

import Root, { _Root, _RootPropsType } from './components/Root';
import * as _ from 'lodash';

export type RootRenderableType = BaseRootRenderableType<_Root>;

export default class ReactiveKonvaRenderer extends BaseRenderer<_Root, _RootPropsType> {
  instanceTree: InstanceTreeType;
  constructor(args: {
    container: HTMLElement,
  }) {
    super();
    this.instanceTree = {
      instance: new _Root(args.container),
      children: {},
    };
  }
  render(
    toRender: RootRenderableType | null,
    rootProps: _RootPropsType,
  ) {
    this.instanceTree.instance.applyInitialProps(rootProps);
    this.instanceTree.instance.updateBeforeChildren(rootProps);
    const renderRoot = Root({
      key: '__ROOT__',
      ...rootProps,
    }, _.compact([
      toRender,
    ]));
    renderChild(this.instanceTree, renderRoot);
    this.instanceTree.instance.updateAfterChildren(rootProps);
  }
  dispose() {
    this.instanceTree.instance.delete();
    delete this.instanceTree.instance;
    delete this.instanceTree.children;
    delete this.instanceTree;

  }
}