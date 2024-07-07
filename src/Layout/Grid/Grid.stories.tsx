import { Meta, StoryObj } from '@storybook/react';
import Grid from 'Layout/Grid/Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    columns: { control: 'number' },
    gap: { control: 'number' },
    children: { control: false },
  },
} as Meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    columns: 3,
    gap: 16,
    children: Array.from({ length: 16 }, (_, i) => (
      <div className="grid-item" key={i + 1}>{i + 1}</div>
    )),
  },
};