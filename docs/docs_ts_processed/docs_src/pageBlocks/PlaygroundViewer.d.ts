/// <reference types="react" />
import * as React from 'react';
export declare type PropsType = {
    injectLibs: {
        [key: string]: any;
    };
};
export declare type StateType = {};
export default class PlaygroundViewer extends React.Component<PropsType, StateType> {
    refs: {
        canvasRef: HTMLCanvasElement;
    };
    runCode(code: string): void;
    render(): JSX.Element;
}
