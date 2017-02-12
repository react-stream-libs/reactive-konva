import * as React from 'react';

export type PropsType = {
  onSetValue: (value: number) => any;
  durationMs: number;
};
export type StateType = {

};
export default class TimeController extends React.Component<PropsType, StateType> {
  refs: {
    containerRef: HTMLDivElement,
  }
  renderKonva() {

  }
  componentDidMount() {

  }
  render() {
    return (
      <div
        ref="containerRef"
      />
    );
  }
}