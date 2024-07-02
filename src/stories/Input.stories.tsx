import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '@components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    inputSize: {
      control: {
        type: 'select',
        options: ['small', 'large', 'responsive'],
      },
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: 'Enter text...',
    inputSize: 'large',
  },
};
