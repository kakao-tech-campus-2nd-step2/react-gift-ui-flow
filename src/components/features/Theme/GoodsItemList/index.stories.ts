import { Meta, StoryObj } from '@storybook/react';
import GoodsItemList from '.';

const meta: Meta<typeof GoodsItemList> = {
  title: 'features/Theme/GoodsItemList',
  component: GoodsItemList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GoodsItemList>;

export const Default: Story = {};
