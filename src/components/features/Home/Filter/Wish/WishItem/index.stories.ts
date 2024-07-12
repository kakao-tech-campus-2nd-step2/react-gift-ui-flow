import { Meta, StoryObj } from '@storybook/react';
import WishItem, { WishItemProps } from '.';
import { FILTER_WISHS } from '../../constants';

const meta: Meta<WishItemProps> = {
  title: 'features/Home/Filter/Wish/WishItem',
  component: WishItem,
  tags: ['autodocs'],
  argTypes: {
    wish: { control: 'select', options: FILTER_WISHS.map((wish) => wish.wish) },
  },
};

export default meta;

type Story = StoryObj<WishItemProps>;

export const Default: Story = {
  args: {
    wish: FILTER_WISHS[0].wish,
  },
};
