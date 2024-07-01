import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Container from '../components/Layout/Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxWidth: { control: 'text' },
    flexDirection: {
      control: 'select',
      options: ['row', 'column'],
    },
    justifyContent: {
      control: 'select',
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
      ],
    },
    alignItems: {
      control: 'select',
      options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
    },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => <Container {...args} />,
  args: {
    maxWidth: '800px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    children: 'Hello, world!',
  },
};
