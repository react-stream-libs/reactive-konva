import * as React from 'react';
import { findDOMNode } from 'react-dom';
import {
  IContextBase,
} from 'reactive-renderer';
import {
  RootRenderer,
  RootBlueprint,
  _RootPropsType,
  RootRenderableType,
} from 'reactive-konva-src';

export type PropsType = {

};
export type StateType = {

};

export type __RootPropsType = Partial<_RootPropsType>;

const context: IContextBase = {
  __EXTENDS_ICONTEXT_BASE: null,
};
export default class ReactiveKonvaReactWrapper
    extends React.Component<PropsType, StateType> {
  public refs: {
    [key: string]: HTMLElement;
    containerRef: HTMLCanvasElement;
  };
  public renderer: RootRenderer;
  public componentDidMount() {
    const containerDOM = findDOMNode<HTMLDivElement>(this.refs.containerRef);
    const rootInstance = new RootBlueprint(containerDOM);
    this.renderer = new RootRenderer({
      instance: rootInstance,
      key: 'root'
    });
  }
  public update(renderable: RootRenderableType, rootProps: __RootPropsType) {
    const rootPropsToRender = {
      key: '__ROOT__',
      width: 500,
      height: 500,
      ...rootProps,
    };
    this.renderer.render(renderable, context, rootPropsToRender);
  }
  public render() {
    return (
      <div
        ref="containerRef"
      />
    );
  }
}
