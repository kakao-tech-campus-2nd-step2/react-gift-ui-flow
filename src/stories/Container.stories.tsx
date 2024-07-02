import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Container from '../components/Layout/Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => <Container {...args} />,
  args: {
    maxWidth: '1200px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    children: 'Hello, world!',
  },
};
