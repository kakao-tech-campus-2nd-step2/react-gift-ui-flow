import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InputWithPlaceholder: Story = {
  args: {
    elementSize: {
      width: '200px',
      height: '30px',
    },
    placeholder: 'placeholder test',
  },
};

export const InputWithDefaultValue: Story = {
  args: {
    elementSize: {
      width: '200px',
      height: '30px',
    },
    placeholder: 'enter a value',
    defaultValue: 'default value',
  },
};

export const InputError: Story = {
  args: {
    elementSize: {
      width: '200px',
      height: '30px',
    },
    placeholder: 'error value',
    invalid: true,
  },
};
