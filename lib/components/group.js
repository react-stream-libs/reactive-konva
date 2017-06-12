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
var lodash_1 = require("lodash");
var tailored_reactive_renderer_1 = require("../tailored-reactive-renderer");
var reactive_renderer_1 = require("reactive-renderer");
exports.BaseBlueprint = reactive_renderer_1.BaseBlueprint;
var node_1 = require("../props/node");
var GroupBlueprint = function (_super) {
    __extends(GroupBlueprint, _super);
    function GroupBlueprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupBlueprint.prototype.init = function (parent) {
        this.node = new konva_1.Group();
        this.parent = parent;
        parent.node.add(this.node);
    };
    GroupBlueprint.prototype.updateBeforeChildren = function (props) {};
    GroupBlueprint.prototype.updateAfterChildren = function (props) {
        node_1.applyNodeProps(this.node, props);
    };
    GroupBlueprint.prototype.reorderChildren = function (oldChildrenList, oldChildrenDict, newChildrenList, newChildrenDict) {
        var _this = this;
        this.node.removeChildren();
        lodash_1.forEach(newChildrenList, function (newChild) {
            // const instance = newChild.instance;
            _this.node.add(newChild.instance.node);
        });
    };
    GroupBlueprint.prototype.cleanUp = function () {
        this.node.destroyChildren();
        this.node.destroy();
    };
    return GroupBlueprint;
}(tailored_reactive_renderer_1.Blueprint);
exports.GroupBlueprint = GroupBlueprint;
exports.group = tailored_reactive_renderer_1.createComponent(GroupBlueprint);
exports.default = exports.group;