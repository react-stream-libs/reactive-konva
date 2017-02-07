"use strict";
const konva_1 = require("konva");
const Root_1 = require("./Root");
const reactive_renderer_1 = require("reactive-renderer");
exports.BaseBlueprint = reactive_renderer_1.BaseBlueprint;
class _Layer extends reactive_renderer_1.BaseBlueprint {
    init(parent) {
        this.layer = new konva_1.Layer();
        this.parent = parent;
        if (this.parent instanceof Root_1._Root) {
            this.parent.stage.add(this.layer);
        }
        if (this.parent instanceof _Layer) {
            this.parent.layer.add(this.layer);
        }
    }
    updateBeforeChildren(props) {
    }
    updateAfterChildren(props) {
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
exports._Layer = _Layer;
exports.Layer = reactive_renderer_1.createComponent(_Layer);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Layer;
