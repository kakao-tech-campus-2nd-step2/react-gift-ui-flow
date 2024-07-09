import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import AuthContext from '@context/auth/AuthContext';
import AccountOverview from '.';

const meta: Meta<typeof AccountOverview> = {
  title: 'features/Account/AccountOverview',
  component: AccountOverview,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { isAuthenticated } = context.parameters;
      return (
        <AuthContext.Provider value={{ isAuthenticated, login: () => {}, logout: () => {} }}>
          <MemoryRouter>
            <Story userName="사용자" />
          </MemoryRouter>
        </AuthContext.Provider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof AccountOverview>;

export const Default: Story = {};
