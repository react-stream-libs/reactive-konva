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
var konva_1 = require("konva");
var lodash_1 = require("lodash");
var tailored_reactive_renderer_1 = require("../tailored-reactive-renderer");
exports.BaseBlueprint = tailored_reactive_renderer_1.BaseBlueprint;
var node_1 = require("../props/node");
var LayerBlueprint = (function (_super) {
    __extends(LayerBlueprint, _super);
    function LayerBlueprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerBlueprint.prototype.init = function (parent) {
        this.node = new konva_1.Layer();
        this.parent = parent;
        parent.node.add(this.node);
    };
    LayerBlueprint.prototype.addChild = function () {
    };
    LayerBlueprint.prototype.detachChildren = function () {
        this.node.remove();
    };
    LayerBlueprint.prototype.reorderChildren = function (oldChildrenList, oldChildrenDict, newChildrenList, newChildrenDict) {
        var _this = this;
        this.node.removeChildren();
        lodash_1.forEach(newChildrenList, function (newChild) { return _this.node.add(newChild.instance.node); });
    };
    LayerBlueprint.prototype.updateBeforeChildren = function (props) {
    };
    LayerBlueprint.prototype.updateAfterChildren = function (props) {
        node_1.applyNodeProps(this.node, props);
        this.node.batchDraw();
    };
    LayerBlueprint.prototype.cleanUp = function () {
        this.node.destroyChildren();
        this.node.destroy();
    };
    return LayerBlueprint;
}(tailored_reactive_renderer_1.Blueprint));
exports.LayerBlueprint = LayerBlueprint;
exports.layer = tailored_reactive_renderer_1.createComponent(LayerBlueprint);
exports.default = exports.layer;
