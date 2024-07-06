import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const DefaultContainer: Story = {
  args: {
    children: 'test',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '100%',
  },
};
