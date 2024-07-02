import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Input from './index';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    Size: {
      options: ['sm', 'md', 'lg', 'responsive'],
      control: { type: 'radio' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallInput: Story = {
  args: {
    Size: 'sm',
  },
};

export const MediumDisabledInput: Story = {
  args: {
    disabled: true,
    Size: 'md',
  },
};

export const LargeInvalidInput: Story = {
  args: {
    invalid: true,
    Size: 'lg',
  },
};

export const ResponsiveInput: Story = {
  args: {
    Size: 'responsive',
  },
};
