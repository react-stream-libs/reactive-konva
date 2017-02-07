"use strict";

exports.COLOR_FILL = 'COLOR_FILL';
exports.color = color => ({
    __FillType: 'COLOR_FILL',
    color
});
function apply(shape, fill) {
    shape.fill(fill.color);
}
exports.apply = apply;