import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as _ from 'lodash';

export type PropsType = {
  injectLibs: { [key: string]: any; }
};
export type StateType = {
}
export default class PlaygroundViewer extends React.Component<PropsType, StateType> {
  refs: {
    canvasRef: HTMLCanvasElement;
  }
  runCode(code: string) {
    const canvasElem = findDOMNode<HTMLCanvasElement>(this.refs.canvasRef);
    console.assert(true, `${canvasElem}`);
    const codeLines = code.split('\n');
    const codeLinesWithoutImport = _.filter(
      codeLines, (line) => line.startsWith('import')
    );
    const libs = this.props.injectLibs;
    const codeLinesToInjectLibs = _.map(libs, (content, name) => {
      return `var ${name} = libs.${name};`;
    });
    const codeToRun = _.flattenDeep([
      codeLinesToInjectLibs,
      codeLinesWithoutImport,
      `console.error('konva:', konva)`,
      `
      console.error('_:', _.filter);
      if (!konva) {
        console.error('!!!!');
      }
      `
    ]).join('\n');
    try {
      eval(codeToRun);
    } catch(e) {
      console.error(e);
    }
  }
  render() {
    return (
      <canvas
        ref="canvasRef"
      />
    )
  }
}
