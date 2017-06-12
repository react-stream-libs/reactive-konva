"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function applyStroke(shape, stroke) {
    shape.stroke(stroke.color || '#000000');
    shape.strokeWidth(stroke.width || 1);
}
exports.applyStroke = applyStroke;