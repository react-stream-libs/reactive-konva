import * as React from 'react';
import { findDOMNode } from 'react-dom';
import Renderer, { RootRenderableType } from '../../src/Renderer';
import { _RootPropsType } from '../../src/components/Root';

export type PropsType = {

};
export type StateType = {

};

export type __RootPropsType = Partial<_RootPropsType>;

export default class ReactivePixiReactWrapper
    extends React.Component<PropsType, StateType> {
  refs: {
    [key: string]: HTMLElement;
    containerRef: HTMLCanvasElement;
  }
  renderer: Renderer;
  componentDidMount() {
    const containerDOM = findDOMNode<HTMLDivElement>(this.refs.containerRef);
    this.renderer = new Renderer({
      container: containerDOM,
    });
  }
  update(renderable: RootRenderableType, rootProps: __RootPropsType) {
    const _rootProps = {
      key: '__ROOT__',
      width: 500,
      height: 500,
      ...rootProps,
    };
    this.renderer.render(renderable, _rootProps);
  }
  render() {
    return (
      <div
        ref="containerRef"
      />
    );
  }
}