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
var konva_1 = require("konva");
var tailored_reactive_renderer_1 = require("../tailored-reactive-renderer");
exports.BaseBlueprint = tailored_reactive_renderer_1.BaseBlueprint;
var NoneExistentNode = function (_super) {
    __extends(NoneExistentNode, _super);
    function NoneExistentNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoneExistentNode;
}(konva_1.Node);
exports.NoneExistentNode = NoneExistentNode;
var NoneExistentBlueprint = function (_super) {
    __extends(NoneExistentBlueprint, _super);
    function NoneExistentBlueprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoneExistentBlueprint.prototype.reorderChildren = function () {};
    NoneExistentBlueprint.prototype.init = function (parent) {};
    NoneExistentBlueprint.prototype.updateBeforeChildren = function (props) {};
    NoneExistentBlueprint.prototype.updateAfterChildren = function (props) {};
    NoneExistentBlueprint.prototype.cleanUp = function () {};
    return NoneExistentBlueprint;
}(tailored_reactive_renderer_1.Blueprint);
exports.NoneExistentBlueprint = NoneExistentBlueprint;
/**
 * For internal use
 */
var RootBlueprint = function (_super) {
    __extends(RootBlueprint, _super);
    function RootBlueprint(container) {
        var _this = _super.call(this) || this;
        _this.container = container;
        return _this;
    }
    RootBlueprint.prototype.reorderChildren = function () {};
    RootBlueprint.prototype.init = function (parent) {};
    RootBlueprint.prototype.updateBeforeChildren = function (props) {};
    RootBlueprint.prototype.updateAfterChildren = function (props) {};
    RootBlueprint.prototype.cleanUp = function () {};
    return RootBlueprint;
}(tailored_reactive_renderer_1.Blueprint);
exports.RootBlueprint = RootBlueprint;
exports.root = tailored_reactive_renderer_1.createComponent(RootBlueprint);
exports.default = exports.root;