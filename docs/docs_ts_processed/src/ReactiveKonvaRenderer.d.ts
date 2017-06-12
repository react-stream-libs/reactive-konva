import { BaseRenderer } from 'reactive-renderer';
import { RootRenderableType, InstanceTreeType } from './tailored-reactive-renderer';
import { RootBlueprint, _RootPropsType } from './components/root';
import { ICommonBlueprintBase } from './ICommonBlueprintBase';
/**
 * ReactiveKonva Renderer.
 * Usage:...
 *
 * @export
 * @class ReactiveKonvaRenderer
 * @extends {BaseRenderer<_Root, _RootPropsType>}
 */
export default class ReactiveKonvaRenderer extends BaseRenderer<RootBlueprint, _RootPropsType, ICommonBlueprintBase> {
    instanceTree: InstanceTreeType;
    constructor(args: {
        container: HTMLElement;
    });
    render(toRender: RootRenderableType | null, rootProps: _RootPropsType): void;
    dispose(): void;
}
