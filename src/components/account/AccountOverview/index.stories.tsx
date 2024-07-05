import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import AccountOverview from '.';

const meta: Meta<typeof AccountOverview> = {
  title: 'components/account/AccountOverview',
  component: AccountOverview,
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

type Story = StoryObj<typeof AccountOverview>;

export const Default: Story = {};
