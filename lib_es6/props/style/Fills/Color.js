"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR_FILL = 'COLOR_FILL';
exports.color = function (color) { return ({
    __FillType: 'COLOR_FILL',
    color: color,
}); };
function apply(shape, fill) {
    shape.fill(fill.color);
}
exports.apply = apply;
