import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import GlobalStyles from '@assets/styles';
import InputField, { InputFieldProps } from '.';

const meta: Meta<InputFieldProps> = {
  title: 'common/Form/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password'],
    },
    label: {
      control: 'text',
    },
    labelFor: {
      control: 'text',
    },
    srOnly: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    type: 'text',
    label: '이름',
    labelFor: 'userName',
    srOnly: true,
    size: 'small',
    disabled: true,
  },
};
