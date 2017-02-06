"use strict";

const konva_1 = require("konva");
const reactive_renderer_1 = require("reactive-renderer");
exports.BaseBlueprint = reactive_renderer_1.BaseBlueprint;
const Layer_1 = require("./Layer");
const Fills_1 = require("./Fills");
class _Rectangle extends reactive_renderer_1.BaseBlueprint {
    init(parent) {
        this.rect = new konva_1.Rect({});
        this.parent = parent;
        if (this.parent instanceof Layer_1._Layer) {
            this.parent.layer.add(this.rect);
        }
    }
    updateBeforeChildren(props) {
        const { rect } = this;
        rect.x(props.x);
        rect.y(props.y);
        rect.width(props.width || 1);
        rect.height(props.height || 1);
        if (props.fill) {
            Fills_1.applyFill(rect, props.fill);
        }
        rect.skewX(props.skewX || 0);
        rect.skewY(props.skewY || 0);
        rect.filters(props.filters || []);
        rect.opacity(props.opacity || 1);
    }
    updateAfterChildren(props) {}
    delete() {
        this.rect.destroy();
    }
}
exports._Rectangle = _Rectangle;
exports.Rectangle = reactive_renderer_1.createComponent(_Rectangle);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Rectangle;