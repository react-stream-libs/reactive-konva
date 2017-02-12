/// <reference path="../../node_modules/monaco-editor/monaco.d.ts" />

declare module 'react-monaco-editor' {
  import { Component } from 'react';
  type MonacoType = typeof monaco;
  export type ReactMonacoEditorProps = {
    width: string,
    height: string,
    language: string,
    options: monaco.editor.IEditorOptions,
    editorDidMount?: (editor: monaco.editor.ICodeEditor, monaco: MonacoType) => any,
    requireConfig?: {
      url?: string,
      paths?: {
        vs?: string,
      }
    }
    onChange?: (newValue: string, e: monaco.editor.IModelContentChangedEvent2) => any,
  };
  export type ICodeEditor = monaco.editor.ICodeEditor;
  // export const monaco: MonacoType;
  export default class ReactMonacoEditor
      extends Component<ReactMonacoEditorProps, void> { }
}