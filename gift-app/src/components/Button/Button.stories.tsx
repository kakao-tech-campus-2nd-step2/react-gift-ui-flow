import type { Meta, StoryObj } from '@storybook/react';
import Button from '@components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: 'primary',
    label: 'Button'
  },
};