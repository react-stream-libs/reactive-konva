import { Stage as KonvaStage } from 'konva';
import { BaseBlueprint, BasePropsType, IParentableBy, RenderableType } from 'reactive-renderer';
import { _Root } from './Root';
export declare type _StagePropsType = {
    container: HTMLElement;
    width: number;
    height: number;
    x?: number;
    y?: number;
} & BasePropsType;
export declare class _Stage extends BaseBlueprint<_StagePropsType> implements IParentableBy<_Root> {
    stage: KonvaStage;
    prevProps: _StagePropsType;
    parent: _Root;
    init(parent: _Root): void;
    applyInitialProps(props: _StagePropsType): void;
    updateBeforeChildren(props: _StagePropsType): void;
    updateAfterChildren(props: _StagePropsType): void;
    delete(): void;
}
export declare const Stage: (props: _StagePropsType, children: RenderableType<BasePropsType, BaseBlueprint<BasePropsType> & IParentableBy<_Stage>, _Stage>[]) => RenderableType<_StagePropsType, _Stage, _Root>;
export default Stage;
export { RenderableType, BaseBlueprint };
