"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
exports.color = Color_1.color;
var LinearGradient_1 = require("./LinearGradient");
exports.linearGradient = LinearGradient_1.linearGradient;
function applyFill(shape, fill) {
    if (fill.__FillType === Color_1.COLOR_FILL) {
        Color_1.apply(shape, fill);
        return;
    }
    if (fill.__FillType === LinearGradient_1.LINEAR_GRADIENT) {
        LinearGradient_1.apply(shape, fill);
        return;
    }
    console.error('invalid fill', fill);
    throw new Error("invalid fill: " + fill);
}
exports.applyFill = applyFill;