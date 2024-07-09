import React from 'react';
import useFilter from '@/hooks/useFilter';
import { Meta, StoryObj } from '@storybook/react';
import Target, { TargetProps } from '.';
import { FILTER_TARGETS } from '../constants';

const meta: Meta<TargetProps> = {
  title: 'features/Home/Filter/Target',
  component: Target,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<TargetProps>;

function TargetWithFilterHooks(args: TargetProps) {
  const { selectedTarget, selectTarget } = useFilter(FILTER_TARGETS[0].name, '');

  return <Target {...args} selectedTarget={selectedTarget} selectTarget={selectTarget} />;
}

export const Default: Story = {
  render: (args) => <TargetWithFilterHooks {...args} />,
  args: {
    selectedTarget: FILTER_TARGETS[0].name,
    selectTarget: () => {},
  },
};
