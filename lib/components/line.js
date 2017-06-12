"use strict";

var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var konva_1 = require("konva");
var reactive_renderer_1 = require("reactive-renderer");
exports.BaseBlueprint = reactive_renderer_1.BaseBlueprint;
var tailored_reactive_renderer_1 = require("../tailored-reactive-renderer");
var style_1 = require("../props/style");
var node_1 = require("../props/node");
var LineBlueprint = function (_super) {
    __extends(LineBlueprint, _super);
    function LineBlueprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineBlueprint.prototype.init = function (parent) {
        this.node = new konva_1.Line({
            points: []
        });
        this.parent = parent;
        this.parent.node.add(this.node);
    };
    LineBlueprint.prototype.updateBeforeChildren = function (props) {
        var linePoints = lodash_1.flatten(props.points);
        var node = this.node;
        node.points(linePoints);
        style_1.applyStyleProps(node, props);
        node_1.applyNodeProps(node, props);
    };
    LineBlueprint.prototype.updateAfterChildren = function (props) {};
    LineBlueprint.prototype.reorderChildren = function (oldChildrenList, oldChildrenDict, newChildrenList, newChildrenDict) {};
    LineBlueprint.prototype.cleanUp = function () {
        this.node.destroy();
    };
    return LineBlueprint;
}(tailored_reactive_renderer_1.Blueprint);
exports.LineBlueprint = LineBlueprint;
exports.line = tailored_reactive_renderer_1.createComponent(LineBlueprint);
exports.default = exports.line;