import { Stage } from 'konva';
import { BaseBlueprint, BasePropsType, IParentableBy, RenderableType } from 'reactive-renderer';
export declare type _RootPropsType = {
    width: number;
    height: number;
    x?: number;
    y?: number;
} & BasePropsType;
export declare class _NoneExistentBlueprint extends BaseBlueprint<BasePropsType> {
    init(parent: BaseBlueprint<BasePropsType>): void;
    updateBeforeChildren(props: BasePropsType): void;
    updateAfterChildren(props: BasePropsType): void;
    delete(): void;
}
export declare class _Root extends BaseBlueprint<_RootPropsType> implements IParentableBy<_NoneExistentBlueprint> {
    stage: Stage;
    constructor(container?: HTMLElement);
    init(parent: _NoneExistentBlueprint): void;
    updateBeforeChildren(props: _RootPropsType): void;
    updateAfterChildren(props: BasePropsType): void;
    delete(): void;
}
export declare const Root: (props: _RootPropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Root>, _Root>[]) => RenderableType<_RootPropsType, _Root, _NoneExistentBlueprint>;
export default Root;
export { RenderableType, BaseBlueprint };
