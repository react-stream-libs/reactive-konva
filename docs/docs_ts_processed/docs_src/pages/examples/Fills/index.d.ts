/// <reference types="react" />
import * as React from 'react';
import PlaygroundViewer from '../../../pageBlocks/PlaygroundViewer';
import Editor from '../../../pageBlocks/Editor';
import FILL_EXAMPLE_NAMES from './EXAMPLE_NAMES';
export declare type PropsType = {};
export declare type StateType = {
    activeExample?: FILL_EXAMPLE_NAMES;
};
export default class FillExamplePage extends React.Component<PropsType, StateType> {
    constructor(props: PropsType);
    refs: {
        editorRef: Editor;
        playgroundRef: PlaygroundViewer;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
