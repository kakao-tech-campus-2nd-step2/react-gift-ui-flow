import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '@/components/ui/Layout/Grid';

import { NumberNode } from './NumberNode';

const meta: Meta<typeof Grid> = {
  title: 'Example/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    gap: {
      control: 'number',
    },
    columns: {
      control: 'number',
    },
  },
  args: {
    children: <NumberNode />,
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {};

export const ResponsiveColumns: Story = {
  args: {
    columns: {
      initial: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
  },
};
