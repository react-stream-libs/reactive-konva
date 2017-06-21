import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Observable,
  // BehaviorSubject,
  Scheduler,
} from 'rxjs';
import RxReactKonvaWrapper from '../../components/RxReactKonvaWrapper';
import fpsMeter from '../../components/fpsMeter';
import {
  stage,
  layer,
  // group,
  rectangle,
  color,
} from 'reactive-konva-src';

export function getSimpleAnimationStory(baseName: string) { // tslint:disable export-name
  const rawIntervalStream = Observable
    .interval(1000, Scheduler.animationFrame);
  // const isPausedStream = new BehaviorSubject(false);

  const intervalStream = rawIntervalStream;
  // const intervalStream = isPausedStream
  //   .switchMap(paused => paused ? Observable.never() : rawIntervalStream)
  //   .scan((acc, val) => acc + 1, 0);
  const baseStyleStream = Observable.of<React.CSSProperties>({});
  storiesOf(baseName, module)
    .add('SimpleAnimation', () => {
      return (
        <RxReactKonvaWrapper
          renderableStream={
            intervalStream
              .map(
                nth => stage({
                  width: 1000, height: 1000,
                  key: 'stage'
                }, [
                  layer({
                    key: 'layer',
                    x: 0, y: 0,
                  }, [
                    fpsMeter({
                      maxMeterGraphs: 10,
                      key: 'fpsMeter',
                    }, [], {
                      __EXTENDS_ICONTEXT_BASE: null,
                    }),
                    rectangle({
                      key: 'rect',
                      x: 0, y: 0,
                      width: 100, height: 100,
                      fill: color('#a00F03'),
                    }, []),
                  ]),
                ])
              )
          }
          styleStream={ baseStyleStream }
          width={ 500 }
          height={ 500 }
          key="SimpleAnimStage"
        />
      );
      // return (
      //   <div>
      //     <h1> test </h1>
      //   </div>
      // );
    });
}
