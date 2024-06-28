import type { Meta, StoryObj } from '@storybook/react';
import { Themes } from '@styles/theme';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;
export const LightResponsive: Story = {
  args: {
    theme: Themes.THEME_LIGHT,
    size: 'responsive',
    text: 'Light Responsive',
  },
};
export const DarkResponsive: Story = {
  args: {
    theme: Themes.THEME_DARK,
    size: 'responsive',
    text: 'Dark Responsive',
  },
};
export const DarkFixed: Story = {
  args: {
    theme: Themes.THEME_DARK,
    size: {
      width: '120px',
      height: '100px',
    },
    text: 'Dark Fixed',
  },
};
