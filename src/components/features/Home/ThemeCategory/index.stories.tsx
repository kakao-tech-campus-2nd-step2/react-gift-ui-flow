import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import ThemeCategory from '.';

const meta: Meta<typeof ThemeCategory> = {
  title: 'features/Home/ThemeCategory',
  component: ThemeCategory,
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

type Story = StoryObj<typeof ThemeCategory>;

export const Default: Story = {};
