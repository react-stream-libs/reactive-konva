/// <reference types="react" />
import * as React from 'react';
import PlaygroundViewer from '../../pageBlocks/PlaygroundViewer';
import Editor from '../../pageBlocks/Editor';
export declare type PropsType = {};
export declare type StateType = {};
export default class AggregateComponentExamplePage extends React.Component<PropsType, StateType> {
    refs: {
        editorRef: Editor;
        playgroundRef: PlaygroundViewer;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
