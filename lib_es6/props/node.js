"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function applyNodeProps(node, nodeProps) {
    node.x(nodeProps.x || 0);
    node.y(nodeProps.y || 0);
    node.width(nodeProps.width || 100);
    node.height(nodeProps.height || 100);
    node.scaleX(nodeProps.scaleX || 1);
    node.scaleY(nodeProps.scaleY || 1);
    node.opacity(nodeProps.opacity || 1);
    node.filters(nodeProps.filters || []);
    node.rotation(nodeProps.rotationDegrees || 0);
}
exports.applyNodeProps = applyNodeProps;
