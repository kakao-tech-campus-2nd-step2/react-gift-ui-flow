import { Meta, StoryObj } from '@storybook/react';
import FriendSelector from '.';

const meta: Meta<typeof FriendSelector> = {
  title: 'features/Home/FriendSelector',
  component: FriendSelector,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FriendSelector>;

export const Default: Story = {};
