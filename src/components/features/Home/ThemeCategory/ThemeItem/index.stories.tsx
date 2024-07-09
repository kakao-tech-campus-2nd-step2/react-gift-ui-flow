import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import theme from '@assets/images/theme.jpeg';
import ThemeItem, { ThemeItemProps } from '.';

const meta: Meta<ThemeItemProps> = {
  title: 'features/Home/ThemeCategory/ThemeItem',
  component: ThemeItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    image: { control: 'text' },
    name: { control: 'text' },
    themeKey: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ThemeItemProps>;

export const Default: Story = {
  args: {
    image: theme,
    name: '스몰럭셔리',
    themeKey: 'small-luxury',
  },
};
