/// <reference types="react" />
import * as React from 'react';
import { ICodeEditor } from 'react-monaco-editor';
export declare type PropsType = {
    editDisabledLines?: number;
    initialFileName?: string;
    initialContent?: string;
    width: number;
    height: number;
    onChange?: (text: string, event: monaco.editor.IModelContentChangedEvent2) => any;
};
export declare type StateType = {};
export default class Editor extends React.Component<PropsType, StateType> {
    editor: ICodeEditor;
    lastContent: string;
    static defaultProps: PropsType;
    constructor(props: PropsType);
    getSource(): string;
    editorDidMount(editor: ICodeEditor, monaco_: any): void;
    onChange(newValue: string, e: monaco.editor.IModelContentChangedEvent2): void;
    render(): JSX.Element;
}
