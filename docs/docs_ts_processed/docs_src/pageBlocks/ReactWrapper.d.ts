/// <reference types="react" />
import * as React from 'react';
import ReactiveKonvaRenderer from '../../src/ReactiveKonvaRenderer';
import { RootRenderableType } from '../../src/tailored-reactive-renderer';
import { _RootPropsType } from '../../src/components/root';
export declare type PropsType = {};
export declare type StateType = {};
export declare type __RootPropsType = Partial<_RootPropsType>;
export default class ReactivePixiReactWrapper extends React.Component<PropsType, StateType> {
    refs: {
        [key: string]: HTMLElement;
        containerRef: HTMLCanvasElement;
    };
    renderer: ReactiveKonvaRenderer;
    componentDidMount(): void;
    update(renderable: RootRenderableType, rootProps: __RootPropsType): void;
    render(): JSX.Element;
}
