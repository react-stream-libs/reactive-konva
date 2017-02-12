import {
  Node,
  Filters,
} from 'konva';

export type NodePropsType = {
  x?: number, y?: number,
  width?: number, height?: number,
  scaleX?: number, scaleY?: number,
  opacity?: number,
  filters?: Filters[],
  rotationDegrees?: number,
};

export function applyNodeProps(node: Node, nodeProps: NodePropsType) {
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
