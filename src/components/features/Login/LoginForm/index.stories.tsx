import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import AuthContext from '@context/auth/AuthContext';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/global/resetStyles';
import LoginForm from '.';

const meta: Meta<typeof LoginForm> = {
  title: 'features/Login/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { isAuthenticated } = context.parameters;
      return (
        <AuthContext.Provider value={{ isAuthenticated, login: () => {}, logout: () => {} }}>
          <MemoryRouter>
            <Global styles={resetStyles} />
            <Story />
          </MemoryRouter>
        </AuthContext.Provider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
