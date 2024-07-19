import UnderlineTextField from '@components/common/Form/Input/UnderlintTextField';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Common/Form/Input/UnderlineTextField',
  component: UnderlineTextField,
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
} satisfies Meta<typeof UnderlineTextField>;

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
