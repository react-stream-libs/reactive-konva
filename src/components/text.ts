import {
  Text as KonvaText,
  TextConfig as KonvaTextConfig,
} from 'konva';

import {
  BasePropsType as ___BasePropsType,
  BaseBlueprint,
  IContextBase,
} from 'reactive-renderer';

import {
  Blueprint,
  IParentableBy, _IParentableBy,
  BasePropsType,
  createComponent,
  _Renderable,
  InstanceTreeType,
} from '../tailored-reactive-renderer';
import { ICommonBlueprint } from '../ICommonBlueprint';

import { LayerBlueprint } from './layer';
import { GroupBlueprint } from './group';
import { applyStyleProps, StylePropsType } from '../props/style';
import { applyNodeProps, NodePropsType } from '../props/node';

export type TextParentType = LayerBlueprint & GroupBlueprint;

export type TextPropsType = KonvaTextConfig &
{
  align?: 'left' | 'center' | 'right' | 'justify',
  fontStyle?: 'normal' | 'italic' | 'bold',
}
  & StylePropsType
  & NodePropsType
  & BasePropsType
;

export class TextBlueprint extends Blueprint<TextPropsType, IContextBase>
    implements IParentableBy<TextParentType> {
  public node: KonvaText;
  private parent: LayerBlueprint | GroupBlueprint;
  public init(parent: TextParentType) {
    this.node = new KonvaText({ text: '' });
    this.parent = parent;
    this.parent.node.add(this.node);
  }
  public updateBeforeChildren(props: TextPropsType) {
    const { node } = this;
    node.align(props.align);
    props.fontFamily && node.fontFamily(props.fontFamily);
    props.fontSize && node.fontSize(props.fontSize);
    node.fontStyle(props.fontStyle || 'normal');
    node.text(props.text);
    applyStyleProps(node, props);
    applyNodeProps(node, props);
  }
  public updateAfterChildren(props: TextPropsType) {
  }
  public reorderChildren(
    oldChildrenList: InstanceTreeType[],
    oldChildrenDict: { [key: string]: InstanceTreeType },
    newChildrenList: InstanceTreeType[],
    newChildrenDict: { [key: string]: InstanceTreeType }
  ) { }
  public cleanUp() {
    this.node.destroy();
  }
}

export const text = createComponent<TextBlueprint, TextParentType, TextPropsType>(TextBlueprint);

export default text;

export {
  BaseBlueprint,
  _IParentableBy,
  _Renderable,
  ICommonBlueprint,
  ___BasePropsType,
};
