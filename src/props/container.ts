import { Container } from 'konva';

export type ContainerPropsType = {
  clipX?: number, clipY?: number,
  clipWidth?: number, clipHeight?: number,
};

export function applyContainerProps(container: Container, props: ContainerPropsType) {
  // https://stackoverflow.com/questions/44447761/how-to-remove-clippings-in-konva
  container.clipX(props.clipX);
  container.clipY(props.clipY);
  container.clipWidth(props.clipWidth);
  container.clipHeight(props.clipHeight);
}
