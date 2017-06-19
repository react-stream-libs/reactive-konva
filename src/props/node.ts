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
  nodeProps.x && node.x(nodeProps.x);
  nodeProps.y && node.y(nodeProps.y);
  nodeProps.width && node.width(nodeProps.width);
  nodeProps.height && node.height(nodeProps.height);
  nodeProps.scaleX && node.scaleX(nodeProps.scaleX);
  nodeProps.scaleY && node.scaleY(nodeProps.scaleY);
  nodeProps.opacity && node.opacity(nodeProps.opacity);
  nodeProps.filters && node.filters(nodeProps.filters);
  nodeProps.rotationDegrees && node.rotation(nodeProps.rotationDegrees);
}
