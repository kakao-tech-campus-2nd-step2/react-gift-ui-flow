import { Meta, StoryObj } from '@storybook/react';
import FriendGiftRecommendation from '.';

const meta: Meta<typeof FriendGiftRecommendation> = {
  title: 'components/home/FriendGiftRecommendation',
  component: FriendGiftRecommendation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FriendGiftRecommendation>;

export const Default: Story = {};
