import type { Meta, StoryObj } from '@storybook/react';
import ThemeItem from './ThemeItem';

const meta: Meta<typeof ThemeItem> = {
  component: ThemeItem,
};

export default meta;

type Story = StoryObj<typeof ThemeItem>;

export const ThemeItemTest: Story = {
  args: {
    themeKey: 'small',
  },
};
