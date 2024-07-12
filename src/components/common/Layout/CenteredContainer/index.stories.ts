import { Meta, StoryObj } from '@storybook/react';
import CenteredContainer, { CenteredContainerProps } from '.';

const meta: Meta<CenteredContainerProps> = {
  title: 'common/Layout/CenteredContainer',
  component: CenteredContainer,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<CenteredContainerProps>;

export const Default: Story = {
  args: {
    maxWidth: 'md',
    children: 'content',
  },
};
