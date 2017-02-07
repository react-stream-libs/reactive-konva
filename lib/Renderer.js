"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
const reactive_renderer_1 = require("reactive-renderer");
const Root_1 = require("./components/Root");
const _ = require("lodash");
class ReactiveKonvaRenderer extends reactive_renderer_1.BaseRenderer {
    constructor(args) {
        super();
        this.instanceTree = {
            instance: new Root_1._Root(args.container),
            children: {}
        };
    }
    render(toRender, rootProps) {
        this.instanceTree.instance.applyInitialProps(rootProps);
        this.instanceTree.instance.updateBeforeChildren(rootProps);
        const renderRoot = Root_1.default(__assign({ key: '__ROOT__' }, rootProps), _.compact([toRender]));
        reactive_renderer_1.renderChild(this.instanceTree, renderRoot);
        this.instanceTree.instance.updateAfterChildren(rootProps);
    }
    dispose() {
        this.instanceTree.instance.delete();
        delete this.instanceTree.instance;
        delete this.instanceTree.children;
        delete this.instanceTree;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactiveKonvaRenderer;