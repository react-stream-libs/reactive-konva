/// <reference types="react" />
import * as React from 'react';
import Renderer, { RootRenderableType } from '../../src/Renderer';
import { _RootPropsType } from '../../src/components/Root';
export declare type PropsType = {};
export declare type StateType = {};
export declare type __RootPropsType = Partial<_RootPropsType>;
export default class ReactivePixiReactWrapper extends React.Component<PropsType, StateType> {
    refs: {
        [key: string]: HTMLElement;
        containerRef: HTMLCanvasElement;
    };
    renderer: Renderer;
    componentDidMount(): void;
    update(renderable: RootRenderableType, rootProps: __RootPropsType): void;
    render(): JSX.JSXElement;
}
