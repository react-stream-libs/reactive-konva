import { Stage as KonvaStage } from 'konva';

import {
  BaseBlueprint,
  BasePropsType,
  createComponent,
  IParentableBy,
  RenderableType,
} from 'reactive-renderer';

import { _Root } from './Root';

export type _StagePropsType = {
  container: HTMLElement;
  width: number, height: number,
  x?: number, y?: number,
} & BasePropsType;

export class _Stage extends BaseBlueprint<_StagePropsType>
    implements IParentableBy<_Root> {
  stage: KonvaStage;
  prevProps: _StagePropsType;
  parent: _Root;
  init(parent: _Root) {
    this.parent = parent;
  }
  applyInitialProps(props: _StagePropsType) {

  }
  updateBeforeChildren(props: _StagePropsType) {
    if (!this.prevProps) {
      this.stage = new KonvaStage({
        container: props.container,
      });
    }
    this.stage.x(props.x || 0);
    this.stage.y(props.y || 0);
    this.stage.setWidth(props.width || 500);
    this.stage.setHeight(props.height || 500);

    if(this.prevProps.container != props.container) {
      this.stage.setContainer(props.container);
    }
  }
  updateAfterChildren(props: _StagePropsType) {
    this.stage.batchDraw();
    this.prevProps = props;
  }
  delete() {
    this.stage.destroyChildren();
    this.stage.destroy();
  }
}

export const Stage = createComponent<_Stage, _Root, _StagePropsType>(_Stage);

export default Stage;

export {
  RenderableType,
  BaseBlueprint,
}