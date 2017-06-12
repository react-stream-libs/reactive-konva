"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stroke_1 = require("./stroke");
var Fills_1 = require("./Fills");
function applyStyleProps(shape, style) {
    if (style === void 0) { style = {}; }
    debugger;
    style.fill ? Fills_1.applyFill(shape, style.fill) : null;
    stroke_1.applyStroke(shape, style.stroke || {});
    shape.opacity(style.opacity || 1);
    shape.skewX(style.skewX || 0);
    shape.skewY(style.skewY || 0);
}
exports.applyStyleProps = applyStyleProps;
