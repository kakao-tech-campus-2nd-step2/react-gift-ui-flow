import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from '@components/common/Form/Input';

const meta: Meta<InputProps> = {
  title: 'common/Form/Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    disabled: false,
    invalid: false,
    size: 'medium',
  },
};
