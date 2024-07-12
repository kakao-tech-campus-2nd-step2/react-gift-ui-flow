import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import useFilter from '@hooks/useFilter';
import Wish, { WishProps } from '.';
import { FILTER_WISHS } from '../constants';

const meta: Meta<WishProps> = {
  title: 'features/Home/Filter/Wish',
  component: Wish,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<WishProps>;

function WishWithFilterHooks(args: WishProps) {
  const { selectedWish, selectWish } = useFilter('', FILTER_WISHS[0].wish);

  return <Wish {...args} selectedWish={selectedWish} selectWish={selectWish} />;
}

export const Default: Story = {
  render: (args) => <WishWithFilterHooks {...args} />,
  args: {
    selectedWish: FILTER_WISHS[0].wish,
    selectWish: () => {},
  },
};
