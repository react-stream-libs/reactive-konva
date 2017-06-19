import 'perfnow';
import { Filters as ___Filters } from 'konva';
import {
  IContextBase,
  BaseBlueprint,
  BasePropsType,
  IParentableBy as __IParentableBy,
  RenderableType as __RenderableType,
} from 'reactive-renderer';
import {
  GroupBasedCustomBlueprint,
  GroupPropsType, GroupParentType,
  createComponentWithContext,
  group,
  rectangle,
  GroupBlueprint,
  LayerBlueprint,
  ICommonBlueprint,
} from 'reactive-konva-src';

export type FPSMeterPropsType = {
  maxMeterGraphs: number,
} & GroupPropsType;

export type FPSMeterParentType = GroupParentType;
export interface IRequiredContext extends IContextBase {
}

export const defaultContext: IContextBase = {
  __EXTENDS_ICONTEXT_BASE: null,
};

export class FPSMeterBlueprint
    extends GroupBasedCustomBlueprint<FPSMeterPropsType, IRequiredContext>
{
  public lastTimeStamp: number;
  public lastTimeStampDiff: number;
  public diffs: number[];
  constructor() {
    super();
    this.lastTimeStamp = performance.now();
    this.lastTimeStampDiff = 0;
    this.diffs = [];
  }
  public tick() {
    const now = performance.now();
    this.lastTimeStampDiff = now - this.lastTimeStamp;
    this.diffs.push(this.lastTimeStampDiff);
    if (this.diffs.length > 10000) {
      this.diffs = this.diffs.splice(this.diffs.length - 100);
    }
  }
  public render(props: FPSMeterPropsType, context: IRequiredContext) {
    return group({
      key: `FPSMeter::${props.key}`,
    }, [
      group({
        key: 'OuterBoxGroup',
      }, [
        rectangle({
          key: 'outerBoxRect',
          ...props,
          color: 'black',
        }, [])
      ])
    ]);
  }
}

export const fpsMeter = createComponentWithContext<
  FPSMeterBlueprint,
  FPSMeterParentType,
  FPSMeterPropsType,
  IRequiredContext
> (FPSMeterBlueprint);

// export to satisfy tsconfig definition option.
export {
  GroupBlueprint as ___GroupBlueprint,
  BaseBlueprint as ___BaseBlueprint,
  BasePropsType as ___BasePropsType,
  ICommonBlueprint as ___ICommonBlueprint,
  __IParentableBy,
  __RenderableType,
  LayerBlueprint as ___LayerBlueprint,
  ___Filters,
};
