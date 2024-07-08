import type { Meta, StoryObj } from '@storybook/react';
import Input from '@components/Input/Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    size: 'medium',
    disabled: false,
    invalid: false,
  },
};