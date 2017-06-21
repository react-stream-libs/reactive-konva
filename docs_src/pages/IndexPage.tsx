import * as React from 'react';
import ReactWrapper from '../pageBlocks/ReactWrapper';

import {
  color, linearGradient,
  layer,
  stage,
  // Group,
  rectangle,
  circle,
  line,
} from 'reactive-konva-src';
// import { Paper } from '../../src/components/Graphics/Paper';
// import { Rectangle } from '../../src/components/Graphics/Rectangle';

export type PropsType = {

};
export type StateType = {
};

export default class IndexPage extends React.Component<PropsType, StateType> {
  public refs: {
    [key: string]: React.ReactInstance;
    reactWrapper: ReactWrapper;
  };
  private rotation: number;
  constructor(props: PropsType) {
    super(props);
    this.rotation = 0;
  }
  public componentDidmount() {

  }
  public rotateBy(angle: number) {
    this.rotation = this.rotation + angle;
    this.updateGraphics();
  }
  public updateGraphics() {
    const renderable = stage({
      key: 'mainStage',
      // container: this.refs.reactWrapper,
    }, [
      layer({
        key: 'layer1',
      }, [
        // TODO: 순서 바꾸면 update?
        rectangle({
          key: 'rect',
          x: 0, y: this.rotation,
          height: 50, width: 100,
          fill: linearGradient({
            startX: 0, startY: 0,
            endX: 100, endY: this.rotation * 10,
            colorPoints: [{
              point: 0.0, color: '#00FF00',
            }, {
              point: 0.3, color: '#000',
            }, {
              point: 1.0, color: '#0FF00F',
            }],
          })
        }, []),
        rectangle({
          key: 'rect_still',
          x: 50, y: 20,
          height: 200, width: 200,
          fill: color('#EEAAFF'),
          opacity: 0.2,
        }, []),
        line({
          key: 'line1',
          points: [
            [1, 0], [100, 100],
          ],
        }, []),
        circle({
          key: 'circle1',
          x: 0, y: 50,
          radius: 100,
          fill: color('#00FF00'),
        }, []),
      ]),
    ]);
    this.refs.reactWrapper.update(renderable, {});
  }
  componentDidMount() {
    const rect = rectangle;
    eval(`
      console.error('eval:: this:', this);
      console.error('eval:: Rectangle', Rect);
    `);
    console.error('rect', rect);
    this.updateGraphics();
  }
  render() {
    return (
      <div>
        <ReactWrapper
          ref="reactWrapper"
        >

        </ReactWrapper>
        {this.props.children}
        <button onClick={() => this.rotateBy(15)}>
          rotate!
        </button>
      </div>
    )
  }
}