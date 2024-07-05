import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import LoginForm from '.';

const meta: Meta<typeof LoginForm> = {
  title: 'components/login/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
