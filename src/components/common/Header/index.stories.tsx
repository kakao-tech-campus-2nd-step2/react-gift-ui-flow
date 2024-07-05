import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';
import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'common/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Global styles={resetStyles} />
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
