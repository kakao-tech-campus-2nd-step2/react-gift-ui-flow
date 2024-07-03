import { Meta, StoryObj } from '@storybook/react';
import Wish from '.';

const meta: Meta<typeof Wish> = {
  title: 'components/Filter/Wish/Default',
  component: Wish,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Wish>;

export const Default: Story = {};
