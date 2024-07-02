import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';

import Button from './index';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Theme: {
      options: ['apple', 'orange', 'mango', 'melon', 'peach'],
      control: { type: 'select' },
    },
    Size: {
      options: ['sm', 'md', 'lg', 'responsive'],
      control: { type: 'radio' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppleSmallBtn: Story = {
  args: {
    Theme: 'apple',
    Size: 'sm',
  },
};

export const OrangeSmallBtn: Story = {
  args: {
    Theme: 'orange',
    Size: 'sm',
  },
};

export const MangoMediumBtn: Story = {
  args: {
    Theme: 'mango',
    Size: 'md',
  },
};

export const MelonLargeBtn: Story = {
  args: {
    Theme: 'melon',
    Size: 'lg',
  },
};

export const PeachResponsiveBtn: Story = {
  args: {
    Theme: 'peach',
    Size: 'responsive',
  },
};
