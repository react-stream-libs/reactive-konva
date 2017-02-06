import {
  Layer as KonvaLayer,
  Filter,
} from 'konva';
import { _Root } from './Root';
import {
  BaseBlueprint,
  BasePropsType,
  createComponent,
  IParentableBy,
  RenderableType,
} from 'reactive-renderer';

export type LayerParentType = _Root & _Layer;

export type LayerPropsType = {
  x?: number; y?: number;
  filters?: Array<Filter>;
  rotationDegrees?: number;
  scaleX?: number; scaleY?: number;
  opacity?: number;
} & BasePropsType;

export class _Layer extends BaseBlueprint<BasePropsType>
    implements IParentableBy<LayerParentType> {
  layer: KonvaLayer;
  parent: _Root;
  prevProps: LayerPropsType;
  init(parent: _Root) {
    this.layer = new KonvaLayer();
    this.parent = parent;
    if (this.parent instanceof _Root) {
      this.parent.stage.add(this.layer);
    }
    if (this.parent instanceof _Layer) {
      this.parent.layer.add(this.layer);
    }
  }
  updateBeforeChildren(props: LayerPropsType) {
  }
  updateAfterChildren(props: LayerPropsType) {
    this.layer.filters(props.filters || []);

    this.layer.rotation(props.rotationDegrees || 0);

    this.layer.scaleX(props.scaleX || 1);
    this.layer.scaleY(props.scaleY || 1);

    this.layer.opacity(props.opacity || 1);

    this.layer.position({ x: props.x || 0, y: props.y || 0 });
    this.layer.batchDraw();
  }
  delete() {
    this.layer.destroyChildren();
    this.layer.destroy();
  }
}

export const Layer = createComponent<_Layer, LayerParentType, LayerPropsType>(_Layer);

export default Layer;

export {
  RenderableType,
  BaseBlueprint,
}
