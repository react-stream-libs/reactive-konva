"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var konva_1 = require("konva");
var reactive_renderer_1 = require("reactive-renderer");
exports.BaseBlueprint = reactive_renderer_1.BaseBlueprint;
var tailored_reactive_renderer_1 = require("../tailored-reactive-renderer");
var node_1 = require("../props/node");
var layer_1 = require("./layer");
var StageBlueprint = (function (_super) {
    __extends(StageBlueprint, _super);
    function StageBlueprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StageBlueprint.prototype.init = function (parent) {
        this.parent = parent;
    };
    StageBlueprint.prototype.attachChild = function (instance) {
        this.node.add(instance.node);
    }; // nothing to do: Stage is de facto 'root' component. \
    StageBlueprint.prototype.reorderChildren = function (oldChildrenList, oldChildrenDict, newChildrenList, newChildrenDict) {
        var _this = this;
        this.node.removeChildren();
        lodash_1.forEach(newChildrenList, function (newChild) {
            // const instance = newChild.instance;
            if (newChild.instance instanceof layer_1.LayerBlueprint) {
                _this.node.add(newChild.instance.node);
            }
        });
    };
    StageBlueprint.prototype.applyInitialProps = function (props) {
    };
    StageBlueprint.prototype.updateBeforeChildren = function (props) {
        if (!this.prevProps) {
            if (!props.container) {
                this.node = new konva_1.Stage({
                    container: this.parent.container,
                });
            }
            else {
                this.node = new konva_1.Stage({
                    container: props.container,
                });
            }
        }
        node_1.applyNodeProps(this.node, props);
        if (this.prevProps.container !== props.container) {
            this.node.setContainer(props.container);
        }
    };
    StageBlueprint.prototype.updateAfterChildren = function (props) {
        this.node.batchDraw();
        this.prevProps = props;
    };
    StageBlueprint.prototype.cleanUp = function () {
        this.node.destroyChildren();
        this.node.destroy();
    };
    return StageBlueprint;
}(tailored_reactive_renderer_1.Blueprint));
exports.StageBlueprint = StageBlueprint;
exports.stage = tailored_reactive_renderer_1.createComponent(StageBlueprint);
exports.default = exports.stage;
