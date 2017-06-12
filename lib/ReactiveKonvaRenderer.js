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
var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var reactive_renderer_1 = require("reactive-renderer");
var root_1 = require("./components/root");
var lodash_1 = require("lodash");
/**
 * ReactiveKonva Renderer.
 * Usage:...
 *
 * @export
 * @class ReactiveKonvaRenderer
 * @extends {BaseRenderer<_Root, _RootPropsType>}
 */
var ReactiveKonvaRenderer = function (_super) {
    __extends(ReactiveKonvaRenderer, _super);
    function ReactiveKonvaRenderer(args) {
        var _this = _super.call(this) || this;
        _this.instanceTree = {
            key: '__REACTIVE_KONVA_RENDERER_ROOT_INSTANCE__',
            instance: new root_1.RootBlueprint(args.container),
            childrenDict: {},
            childrenList: []
        };
        return _this;
    }
    ReactiveKonvaRenderer.prototype.render = function (toRender, rootProps) {
        this.instanceTree.instance.applyInitialProps(rootProps);
        this.instanceTree.instance.updateBeforeChildren(rootProps);
        var renderRoot = root_1.default(__assign({ key: '__ROOT__' }, rootProps), lodash_1.compact([toRender]));
        reactive_renderer_1.renderChild(this.instanceTree, renderRoot);
        this.instanceTree.instance.updateAfterChildren(rootProps);
    };
    ReactiveKonvaRenderer.prototype.dispose = function () {
        this.instanceTree.instance.cleanUp();
        delete this.instanceTree.instance;
        delete this.instanceTree.childrenDict;
        delete this.instanceTree.childrenList;
        delete this.instanceTree;
    };
    return ReactiveKonvaRenderer;
}(reactive_renderer_1.BaseRenderer);
exports.default = ReactiveKonvaRenderer;