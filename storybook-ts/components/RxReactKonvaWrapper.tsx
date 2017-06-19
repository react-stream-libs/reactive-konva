import * as React from 'react';
import {
  Observable,
  Subscription,
} from 'rxjs';
import {
  IContextBase,
} from 'reactive-renderer';
import {
  RootRenderer,
  _RootPropsType,
  RootRenderableType,
  RootBlueprint,
} from 'reactive-konva-src';

import {
  default as ReactStyleStreamedElem,
  StyleStreamType,
} from 'react-style-streamed-elem';

export type PropsType = {
  styleStream: StyleStreamType,
  renderableStream?: Observable<RootRenderableType>;
} & _RootPropsType;
export type StateType = {

};


export default class RxReactKonvaWrapper
    extends React.Component<PropsType, StateType>
{
  public refs: {
    styleStreamedElem: ReactStyleStreamedElem
  };
  private divElem: HTMLDivElement;
  private renderer: RootRenderer;
  private renderSubscription: Subscription;
  private rootContext: IContextBase;
  public componentDidMount() {
    this.divElem = this.refs.styleStreamedElem.targetElem as HTMLDivElement;
    const instance = new RootBlueprint(this.divElem);
    this.renderer = new RootRenderer({
      instance,
      key: '__RxReactKonvaWrapper__'
    });
    this.rootContext = {
      __EXTENDS_ICONTEXT_BASE: null,
    };
    this.renderSubscription = this.props.renderableStream
      .subscribe(renderable => {
        this.renderer.render(renderable, this.rootContext, this.props);
      });
  }

  public render() {
    return (
      <ReactStyleStreamedElem
        styleStream={ this.props.styleStream }
        tagName="div"
        ref="styleStreamedElem"
      >

      </ReactStyleStreamedElem>
    );
  }

  public componentWillUnmount() {
    this.renderSubscription &&
      this.renderSubscription.unsubscribe();
  }
}
