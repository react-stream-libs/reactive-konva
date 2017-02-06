import * as React from 'react';
import * as _ from 'lodash';
import ReactMonacoEditor, { ICodeEditor } from 'react-monaco-editor';

import { addDefaultFiles } from '../monaco/defaultFiles';

export type PropsType = {
  initialFileName?: string,
  initialContent?: string,
  width: number; height: number;
}
export type StateType = {

}

export default class Editor extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
  }
  editorDidMount(editor: ICodeEditor, monaco_: any) {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      "target": monaco.languages.typescript.ScriptTarget.Latest,
      "module": monaco.languages.typescript.ModuleKind.CommonJS,
      "declaration": true,
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
      this.props.initialContent || '', 'typescript', uri
    );
    editor.setModel(model);
    addDefaultFiles();
  }
  render() {
    return (
      <ReactMonacoEditor
        language="typescript"
        width={`${this.props.width}`} height={`${this.props.height}`}
        options={{}}
        editorDidMount={this.editorDidMount}
        requireConfig={{
          url: '/vs/loader.js',
          paths: {
            vs: '/vs',
          }
        }}
      />
    )
  }
}