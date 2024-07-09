import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '@context/auth/AuthContext';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/global/resetStyles';
import AuthLinks from '.';

const meta: Meta<typeof AuthLinks> = {
  title: 'features/Layout/Header/Authlinks',
  component: AuthLinks,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { isAuthenticated } = context.parameters;
      return (
        <AuthContext.Provider value={{ isAuthenticated, login: () => {}, logout: () => {} }}>
          <MemoryRouter initialEntries={['/']}>
            <Global styles={resetStyles} />
            <Story />
          </MemoryRouter>
        </AuthContext.Provider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof AuthLinks>;

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
