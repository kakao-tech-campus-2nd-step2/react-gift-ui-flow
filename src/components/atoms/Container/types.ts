const commons = {
  center: 'center',
  start: 'start',
  end: 'end',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
};

export const ContainerJustifyContentType = {
  ...commons,
  left: 'left',
  right: 'right',
  spaceBetween: 'space-between',
} as const;

export type ContainerJustifyContent =
  (typeof ContainerJustifyContentType)[keyof typeof ContainerJustifyContentType];

export const ContainerAlignItemsType = {
  ...commons,
  stretch: 'stretch',
};

export type ContainerAlignItems =
  (typeof ContainerAlignItemsType)[keyof typeof ContainerAlignItemsType];

export const ContainerDirectionType = {
  row: 'row',
  column: 'column',
};

export type ContainerDirection =
  (typeof ContainerDirectionType)[keyof typeof ContainerDirectionType];
