import * as React from 'react';

import * as _ from 'lodash';
import * as konva from 'konva';
import PlaygroundViewer from '../../pageBlocks/PlaygroundViewer';
import Editor from '../../pageBlocks/Editor';
const rawSrcCode: string = require('!raw-loader!./defaultSources/AggregateComponent');

const srcCode = rawSrcCode.split('\n')
  .filter(rawSrcLine => !rawSrcLine.startsWith('///'))
  .join('\n');

export type PropsType = {

};
export type StateType = {

};
export default class AggregateComponentExamplePage
    extends React.Component<PropsType, StateType> {
  refs: {
    editorRef: Editor,
    playgroundRef: PlaygroundViewer,
  }
  componentDidMount() {
    this.refs.playgroundRef.runCode('');
  }
  render() {
    // const test: HTMLDivElement = 1
    return (
      <div>
        <Editor
          editDisabledLines={5}
          height={500} width={500}
          ref="editorRef"
          initialContent={srcCode}
        />
        <PlaygroundViewer
          injectLibs={{
            _,
            konva,
          }}
          ref="playgroundRef"
        />
      </div>
    );
  }
}