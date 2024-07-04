import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Grid, { GridProps } from '@/components/common/Layout/Grid';

const meta: Meta<GridProps> = {
  title: 'common/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'number' },
      description: 'Gap between grid items',
    },
    columns: {
      control: { type: 'object' },
      description: 'Number of columns or column configuration',
    },
    children: {
      control: { type: 'text' },
      description: 'Grid items',
    },
  },
};

export default meta;

type Story = StoryObj<GridProps>;

export const NumberColumns: Story = {
  args: {
    gap: 10,
    columns: 3,
    children: (
      <>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 3</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 4</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 5</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 5</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 5</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 5</div>
      </>
    ),
  },
};

export const ResponsiveColumns: Story = {
  args: {
    gap: 10,
    columns: { initial: 1, sm: 2, md: 3, lg: 4 },
    children: (
      <>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 1</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 2</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 3</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 4</div>
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>Item 5</div>
      </>
    ),
  },
};
