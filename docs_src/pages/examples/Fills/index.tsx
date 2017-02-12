import * as React from 'react';

import * as _ from 'lodash';
import * as konva from 'konva';
import {
  Row, Col,
  Tabs, Tab,
} from 'react-bootstrap';
import PlaygroundViewer from '../../../pageBlocks/PlaygroundViewer';
import Editor from '../../../pageBlocks/Editor';
import FILL_EXAMPLE_NAMES from './EXAMPLE_NAMES';
const rawSrcCode: string = require('!raw-loader!../defaultSources/AggregateComponent');

const srcCode = rawSrcCode.split('\n')
  .filter(rawSrcLine => !rawSrcLine.startsWith('///'))
  .join('\n');

export type PropsType = {

};
export type StateType = {
  activeExample?: FILL_EXAMPLE_NAMES,
};
export default class FillExamplePage
    extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      activeExample: FILL_EXAMPLE_NAMES.COLOR_EXAMPLE,
    }
  }
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
      <Row>
        <Col md={6}>
          <Tabs
            activeKey={this.state.activeExample}
          >
            <Tab eventKey='color' title="Color">Color</Tab>
          </Tabs>
          <Editor
            editDisabledLines={5}
            height={500} width={500}
            ref="editorRef"
            initialContent={srcCode}
          />
        </Col>
        <PlaygroundViewer
          injectLibs={{
            _,
            konva,
          }}
          ref="playgroundRef"
        />
      </Row>
    );
  }
}