import * as React from 'react';
import { findDOMNode } from 'react-dom';
import ReactiveKonvaRenderer from '../../src/ReactiveKonvaRenderer';
import { RootRenderableType } from '../../src/tailored-reactive-renderer';
import { _RootPropsType } from '../../src/components/root';

export type PropsType = {

};
export type StateType = {

};

export type __RootPropsType = Partial<_RootPropsType>;

export default class ReactivePixiReactWrapper
    extends React.Component<PropsType, StateType> {
  public refs: {
    [key: string]: HTMLElement;
    containerRef: HTMLCanvasElement;
  };
  public renderer: ReactiveKonvaRenderer;
  public componentDidMount() {
    const containerDOM = findDOMNode<HTMLDivElement>(this.refs.containerRef);
    this.renderer = new ReactiveKonvaRenderer({
      container: containerDOM,
    });
  }
  public update(renderable: RootRenderableType, rootProps: __RootPropsType) {
    const rootPropsToRender = {
      key: '__ROOT__',
      width: 500,
      height: 500,
      ...rootProps,
    };
    this.renderer.render(renderable, rootPropsToRender);
  }
  public render() {
    return (
      <div
        ref="containerRef"
      />
    );
  }
}
