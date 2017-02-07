"use strict";
const konva_1 = require("konva");
const reactive_renderer_1 = require("reactive-renderer");
exports.BaseBlueprint = reactive_renderer_1.BaseBlueprint;
class _Stage extends reactive_renderer_1.BaseBlueprint {
    init(parent) {
        this.parent = parent;
    }
    applyInitialProps(props) {
    }
    updateBeforeChildren(props) {
        if (!this.prevProps) {
            this.stage = new konva_1.Stage({
                container: props.container,
            });
        }
        this.stage.x(props.x || 0);
        this.stage.y(props.y || 0);
        this.stage.setWidth(props.width || 500);
        this.stage.setHeight(props.height || 500);
        if (this.prevProps.container != props.container) {
            this.stage.setContainer(props.container);
        }
    }
    updateAfterChildren(props) {
        this.stage.batchDraw();
        this.prevProps = props;
    }
    delete() {
        this.stage.destroyChildren();
        this.stage.destroy();
    }
}
exports._Stage = _Stage;
exports.Stage = reactive_renderer_1.createComponent(_Stage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Stage;
