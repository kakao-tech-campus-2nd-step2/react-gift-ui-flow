import { Meta, StoryObj } from '@storybook/react';
import Container from 'Layout/Container/Container';

export default {
  title: 'Layout/Container',
  component: Container,
} as Meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {},
};