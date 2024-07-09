import { Meta, StoryObj } from '@storybook/react';
import TrendingGifts from '.';

const meta: Meta<typeof TrendingGifts> = {
  title: 'features/Home/TrendingGifts',
  component: TrendingGifts,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TrendingGifts>;

export const Default: Story = {};
