import {
  Node,
} from 'konva';
import { ICommonBlueprintBase } from 'reactive-renderer';

export interface ICommonBlueprint extends ICommonBlueprintBase {
  node: Node;
}
