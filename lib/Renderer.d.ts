import { BaseRenderer, BaseRootRenderableType, InstanceTreeType } from 'reactive-renderer';
import { _Root, _RootPropsType } from './components/Root';
export declare type RootRenderableType = BaseRootRenderableType<_Root>;
export default class ReactiveKonvaRenderer extends BaseRenderer<_Root, _RootPropsType> {
    instanceTree: InstanceTreeType;
    constructor(args: {
        container: HTMLElement;
    });
    render(toRender: RootRenderableType | null, rootProps: _RootPropsType): void;
    dispose(): void;
}
