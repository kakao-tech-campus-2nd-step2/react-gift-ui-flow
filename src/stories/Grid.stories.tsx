import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Grid from '../components/Layout/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    gap: { control: 'number' },
    columns: { control: 'object' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: (args) => <Grid {...args} />,
  args: {
    gap: 10,
    columns: 3,
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </>
    ),
  },
};
