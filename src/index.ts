import RootRenderer, { RootRenderableType } from './renderers/RootRenderer';
import GroupRenderer, { GroupRenderableType } from './renderers/GroupRenderer';
import {
  Blueprint,
  IParentableBy,
  Renderable,
  ComponentType,
  createComponent,
  createComponentWithContext,
  InstanceTreeType,
} from './tailored-reactive-renderer';
import {
  root, RootBlueprint,
  _RootPropsType,
} from './components/root';
import {
  circle, CircleBlueprint,
  group, GroupBlueprint, GroupPropsType, GroupParentType,
  GroupBasedCustomBlueprint,
  layer, LayerBlueprint,
  line, LineBlueprint,
  rectangle, RectangleBlueprint,
  stage, StageBlueprint,
} from './components';
import { ICommonBlueprint } from './ICommonBlueprint';

import {
  color,
  linearGradient,
} from './props/style/Fills';

import { StylePropsType } from './props/style';

import { NodePropsType } from './props/node';

export {
  RootRenderer, RootRenderableType,
  GroupRenderer, GroupRenderableType, GroupPropsType, GroupParentType,
  GroupBasedCustomBlueprint,

  Blueprint,
  IParentableBy,
  Renderable,
  ComponentType,
  createComponent,
  createComponentWithContext,
  InstanceTreeType,

  root, RootBlueprint, _RootPropsType,

  circle, CircleBlueprint,
  group, GroupBlueprint,
  layer, LayerBlueprint,
  line, LineBlueprint,
  rectangle, RectangleBlueprint,
  stage, StageBlueprint,

  ICommonBlueprint,

  color,
  linearGradient,

  StylePropsType,
  NodePropsType,
};
