import {
  BaseRenderer,
  renderChild,
} from 'reactive-renderer';
import {
  RootRenderableType,
  InstanceTreeType,
} from './tailored-reactive-renderer';

import root, { RootBlueprint, _RootPropsType } from './components/root';
import { ICommonBlueprintBase } from './ICommonBlueprintBase';
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
  RootBlueprint, _RootPropsType, ICommonBlueprintBase
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
    };
  }
  public render(
    toRender: RootRenderableType | null,
    rootProps: _RootPropsType,
  ) {
    this.instanceTree.instance.applyInitialProps(rootProps);
    this.instanceTree.instance.updateBeforeChildren(rootProps);
    const renderRoot = root({
      key: '__ROOT__',
      ...rootProps,
    }, compact([
      toRender,
    ]));
    renderChild(this.instanceTree, renderRoot);
    this.instanceTree.instance.updateAfterChildren(rootProps);
  }
  public dispose() {
    this.instanceTree.instance.cleanUp();
    delete this.instanceTree.instance;
    delete this.instanceTree.childrenDict;
    delete this.instanceTree.childrenList;
    delete this.instanceTree;
  }
}
