import { Meta, StoryObj } from '@storybook/react';
import TargetItem, { TargetItemProps } from '.';
import { FILTER_TARGETS } from '../../constants';

const meta: Meta<TargetItemProps> = {
  title: 'features/Home/Filter/Target/TargetItem',
  component: TargetItem,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: FILTER_TARGETS.map((target) => target.icon) },
    target: { control: 'select', options: FILTER_TARGETS.map((target) => target.name) },
  },
};

export default meta;

type Story = StoryObj<TargetItemProps>;

export const Default: Story = {
  args: {
    icon: FILTER_TARGETS[0].icon,
    target: FILTER_TARGETS[0].name,
  },
};
