import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  }
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const ConTheme: Story = {
  args: {
    label: 'Con Theme Button',
    theme: 'Con',
  },
};

export const MujiTheme: Story = {
  args: {
    label: 'Muji Theme Button',
    theme: 'Muji',
  },
};

export const JayGTheme: Story = {
  args: {
    label: 'JayG Theme Button',
    theme: 'JayG',
  },
};