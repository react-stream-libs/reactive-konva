import * as React from 'react';
import ReactWrapper from '../pageBlocks/ReactWrapper';
import { Layer } from '../../src/components/Layer';
import { Rectangle } from '../../src/components/Rectangle';
import { color } from '../../src/components/Fills';
// import { Stage } from '../../src/components/Stage';
// import { Paper } from '../../src/components/Graphics/Paper';
// import { Rectangle } from '../../src/components/Graphics/Rectangle';

export type PropsType = {

};
export type StateType = {
};

export default class IndexPage extends React.Component<PropsType, StateType> {
  rotation: number;
  refs: {
    [key: string]: React.ReactInstance;
    reactWrapper: ReactWrapper;
  }
  constructor(props: PropsType) {
    super(props);
    this.rotation = 0;
  }
  componentDidmount() {

  }
  rotateBy(angle: number) {
    this.rotation = this.rotation + angle;
    this.updateGraphics();
  }
  updateGraphics() {

    const renderable =
      Layer({
        key: 'mainStage',
      }, [
        Rectangle({
          key: 'rect',
          x: 0, y: this.rotation,
          height: 50, width: 100,
          fill: color('#FF00FF'),
        }, []),
        Rectangle({
          key: 'rect_still',
          x: 50, y: 20,
          height: 200, width: 200,
          fill: color('#EEAAFF'),
          opacity: 0.2,
        }, []),
      ]);
    this.refs.reactWrapper.update(renderable, {});
  }
  componentDidMount() {
    const Rect = Rectangle;
    eval(`
      console.error('eval:: this:', this);
      console.error('eval:: Rectangle', Rect);
    `);
    console.error('rect', Rect);
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