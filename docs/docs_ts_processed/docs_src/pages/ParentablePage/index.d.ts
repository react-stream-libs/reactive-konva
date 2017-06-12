/// <reference types="react" />
import * as React from 'react';
import { ICodeEditor } from 'react-monaco-editor';
import ReactWrapper from '../../pageBlocks/ReactWrapper';
export declare type PropsType = {};
export declare type StateType = {};
export default class ParentablePage extends React.Component<PropsType, StateType> {
    refs: {
        [key: string]: React.ReactInstance;
        reactWrapper: ReactWrapper;
    };
    constructor(props: PropsType);
    editorDidMount(editor: ICodeEditor, monaco_: any): Promise<void>;
    render(): JSX.Element;
}
