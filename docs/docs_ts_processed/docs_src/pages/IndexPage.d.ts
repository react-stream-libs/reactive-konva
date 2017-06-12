/// <reference types="react" />
import * as React from 'react';
import ReactWrapper from '../pageBlocks/ReactWrapper';
export declare type PropsType = {};
export declare type StateType = {};
export default class IndexPage extends React.Component<PropsType, StateType> {
    refs: {
        [key: string]: React.ReactInstance;
        reactWrapper: ReactWrapper;
    };
    private rotation;
    constructor(props: PropsType);
    componentDidmount(): void;
    rotateBy(angle: number): void;
    updateGraphics(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
