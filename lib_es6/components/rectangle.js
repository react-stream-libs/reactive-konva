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
var tailored_reactive_renderer_1 = require("../tailored-reactive-renderer");
exports.BaseBlueprint = tailored_reactive_renderer_1.BaseBlueprint;
var style_1 = require("../props/style");
var node_1 = require("../props/node");
var RectangleBlueprint = (function (_super) {
    __extends(RectangleBlueprint, _super);
    function RectangleBlueprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectangleBlueprint.prototype.init = function (parent) {
        this.node = new konva_1.Rect({});
        this.parent = parent;
        this.parent.node.add(this.node);
    };
    RectangleBlueprint.prototype.updateBeforeChildren = function (props) {
        var node = this.node;
        style_1.applyStyleProps(node, props);
        node_1.applyNodeProps(node, props);
    };
    RectangleBlueprint.prototype.updateAfterChildren = function (props) {
    };
    RectangleBlueprint.prototype.reorderChildren = function (oldChildrenList, oldChildrenDict, newChildrenList, newChildrenDict) { };
    RectangleBlueprint.prototype.cleanUp = function () {
        this.node.destroy();
    };
    return RectangleBlueprint;
}(tailored_reactive_renderer_1.Blueprint));
exports.RectangleBlueprint = RectangleBlueprint;
exports.rectangle = tailored_reactive_renderer_1.createComponent(RectangleBlueprint);
exports.default = exports.rectangle;
