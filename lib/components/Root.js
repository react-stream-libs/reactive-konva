"use strict";

const konva_1 = require("konva");
const reactive_renderer_1 = require("reactive-renderer");
exports.BaseBlueprint = reactive_renderer_1.BaseBlueprint;
class _NoneExistentBlueprint extends reactive_renderer_1.BaseBlueprint {
    init(parent) {}
    updateBeforeChildren(props) {}
    updateAfterChildren(props) {}
    delete() {}
}
exports._NoneExistentBlueprint = _NoneExistentBlueprint;
class _Root extends reactive_renderer_1.BaseBlueprint {
    constructor(container) {
        super();
        this.stage = new konva_1.Stage({ container });
    }
    init(parent) {}
    updateBeforeChildren(props) {
        this.stage.width(props.width);
        this.stage.height(props.height);
        this.stage.x(props.x || 0);
        this.stage.y(props.y || 0);
    }
    updateAfterChildren(props) {
        this.stage.batchDraw();
    }
    delete() {
        this.stage.destroyChildren();
        this.stage.destroy();
        delete this.stage;
    }
}
exports._Root = _Root;
exports.Root = reactive_renderer_1.createComponent(_Root);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Root;