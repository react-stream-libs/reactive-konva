"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
exports.LINEAR_GRADIENT = 'LINEAR_GRADIENT';
function linearGradient(args) {
    return __assign({}, args, { __FillType: exports.LINEAR_GRADIENT });
}
exports.linearGradient = linearGradient;
;
function apply(shape, fill) {
    shape.fillLinearGradientStartPointX(fill.startX);
    shape.fillLinearGradientStartPointY(fill.startY);
    shape.fillLinearGradientEndPointX(fill.endX);
    shape.fillLinearGradientEndPointY(fill.endY);
    // FIXME: remove any after konva.d.ts fix.
    var colorPointsArray = _.flatten(fill.colorPoints.map(function (colorPoint) { return [colorPoint.point, colorPoint.color]; }));
    shape.fillLinearGradientColorStops(colorPointsArray);
}
exports.apply = apply;
