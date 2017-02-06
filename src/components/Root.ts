import { Stage } from 'konva';

import {
  BaseBlueprint,
  BasePropsType,
  createComponent,
  IParentableBy,
  RenderableType,
} from 'reactive-renderer';

export type _RootPropsType = {
  width: number, height: number,
  x?: number, y?: number,
} & BasePropsType;

export class _NoneExistentBlueprint extends BaseBlueprint<BasePropsType> {
  init(parent: BaseBlueprint<BasePropsType>) {}
  updateBeforeChildren(props: BasePropsType) {}
  updateAfterChildren(props: BasePropsType) {}
  delete() {}
}

export class _Root extends BaseBlueprint<_RootPropsType>
    implements IParentableBy<_NoneExistentBlueprint> {
  stage: Stage;

  constructor(container?: HTMLElement) {
    super();
    this.stage = new Stage({ container });
  }
  init(parent: _NoneExistentBlueprint) {
  }
  updateBeforeChildren(props: _RootPropsType) {
    this.stage.width(props.width);
    this.stage.height(props.height);
    this.stage.x(props.x || 0);
    this.stage.y(props.y || 0);
  }
  updateAfterChildren(props: BasePropsType) {
    this.stage.batchDraw();
  }
  delete() {
    this.stage.destroyChildren();
    this.stage.destroy();
    delete this.stage;
  }
}

export const Root = createComponent<_Root, _NoneExistentBlueprint, _RootPropsType>(_Root);

export default Root;

export {
  RenderableType,
  BaseBlueprint,
}