import { Meta, StoryObj } from '@storybook/react';
import Inner, { InnerProps } from '.';

const meta: Meta<InnerProps> = {
  title: 'common/Layout/Inner',
  component: Inner,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: { control: 'number' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<InnerProps>;

export const Default: Story = {
  args: {
    maxWidth: 1024,
    children: 'content',
  },
};
