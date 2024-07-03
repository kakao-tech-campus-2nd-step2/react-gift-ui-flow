import { Meta, StoryObj } from '@storybook/react';
import TargetItem, { TargetItemProps } from '.';

const meta: Meta<TargetItemProps> = {
  title: 'components/Filter/Target/TargetItem',
  component: TargetItem,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ['ALL', '👩🏻‍🦳', '👨🏻‍🦳', '👦🏻'] },
    target: { control: 'select', options: ['전체', '여성이', '남성이', '청소년이'] },
  },
};

export default meta;

type Story = StoryObj<TargetItemProps>;

export const Default: Story = {
  args: {
    icon: 'ALL',
    target: '전체',
  },
};
