import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import AuthContext from '@context/auth/AuthContext';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/global/resetStyles';
import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'features/Layout/Header',
  component: Header,
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

type Story = StoryObj<typeof Header>;

export const UnAuthenticated: Story = {
  parameters: {
    isAuthenticated: false,
  },
};

export const Authenticated: Story = {
  parameters: {
    isAuthenticated: true,
  },
};
