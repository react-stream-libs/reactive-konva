import {
  Rect as KonvaRectangle,
  Filter,
} from 'konva';

import {
  BaseBlueprint,
  BasePropsType,
  createComponent,
  IParentableBy,
  RenderableType,
} from 'reactive-renderer';

import { _Layer } from './Layer';
import { applyFill, BaseFillType } from './Fills';

export type RectangleParentType = _Layer;

export type RectanglePropsType = {
  x?: number; y?: number;
  width?: number; height?: number;
  skewX?: number; skewY?: number;
  filters?: Array<Filter>;
  fill?: BaseFillType;
  opacity?: number;
} & BasePropsType;

export class _Rectangle extends BaseBlueprint<BasePropsType>
    implements IParentableBy<RectangleParentType> {
  rect: KonvaRectangle;
  parent: _Layer;
  prevProps: RectanglePropsType;
  init(parent: _Layer) {
    this.rect = new KonvaRectangle({});
    this.parent = parent;
    if (this.parent instanceof _Layer) {
      this.parent.layer.add(this.rect);
    }
  }
  updateBeforeChildren(props: RectanglePropsType) {
    const { rect } = this;
    rect.x(props.x);
    rect.y(props.y);
    rect.width(props.width || 1);
    rect.height(props.height || 1);
    if (props.fill) {
      applyFill(rect, props.fill);
    }
    rect.skewX(props.skewX || 0);
    rect.skewY(props.skewY || 0);
    rect.filters(props.filters || []);
    rect.opacity(props.opacity || 1);
  }
  updateAfterChildren(props: RectanglePropsType) {
  }
  delete() {
    this.rect.destroy();
  }
}

export const Rectangle = createComponent<_Rectangle, RectangleParentType, RectanglePropsType>(_Rectangle);

export default Rectangle;

export {
  RenderableType,
  BaseBlueprint,
}
