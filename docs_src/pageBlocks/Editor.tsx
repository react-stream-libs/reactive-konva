import * as React from 'react';
import * as _ from 'lodash';
import { autobind } from 'core-decorators';
import ReactMonacoEditor, { ICodeEditor } from 'react-monaco-editor';

import { addDefaultFiles } from '../monaco/defaultFiles';

export type PropsType = {
  editDisabledLines?: number,
  initialFileName?: string,
  initialContent?: string,
  width: number; height: number;
  onChange?: (text: string, event: monaco.editor.IModelContentChangedEvent2) => any;
}
export type StateType = {

}

@autobind
export default class Editor extends React.Component<PropsType, StateType> {
  editor: ICodeEditor;
  lastContent: string;
  static defaultProps: PropsType = {
    editDisabledLines: 0,
    initialContent: '',
    initialFileName: 'hello.ts',
    width: 500, height: 500,
    onChange: () => {}
  }
  constructor(props: PropsType) {
    super(props);
  }
  getSource(): string {
    const model = this.editor.getModel();
    return model.getValue();
  }
  editorDidMount(editor: ICodeEditor, monaco_: any) {
    this.editor = editor;
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      "target": monaco.languages.typescript.ScriptTarget.Latest,
      "module": monaco.languages.typescript.ModuleKind.CommonJS,
      "declaration": false,
      "noImplicitAny": true,
      "noUnusedLocals": true,
      "allowJs": false,
      "jsx": monaco.languages.typescript.JsxEmit.React,
      "experimentalDecorators": true,
    });
    const uri = monaco.Uri.from(
      _.assign({}, editor.getModel().uri, { path: this.props.initialFileName })
    );
    const model = monaco.editor.createModel(
      this.props.initialContent, 'typescript', uri
    );
    this.lastContent = this.props.initialContent;
    editor.setModel(model);
    addDefaultFiles();
  }
  onChange(newValue: string, e: monaco.editor.IModelContentChangedEvent2) {
    if (e.range.endLineNumber < this.props.editDisabledLines) {
      this.editor.setValue(this.lastContent);
      return;
    }
    this.lastContent = newValue;
    this.props.onChange(newValue, e);
  }
  render() {
    return (
      <ReactMonacoEditor
        language="typescript"
        width={`${this.props.width}`} height={`${this.props.height}`}
        options={{}}
        editorDidMount={this.editorDidMount}
        requireConfig={{
          url: '/reactive-konva/vs/loader.js',
          paths: {
            vs: '/reactive-konva/vs',
          }
        }}
        onChange={(newValue: string, e: any) => this.onChange(newValue, e)}
      />
    )
  }
}