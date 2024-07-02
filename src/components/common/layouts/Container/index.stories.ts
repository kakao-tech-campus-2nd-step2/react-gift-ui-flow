import type { Meta, StoryObj } from '@storybook/react/*';

import Container from './index';

const meta = {
  title: 'Example/Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    flexDirection: {
      control: {
        type: 'radio',
        options: ['row', 'column'],
      },
    },
    justifyContent: {
      control: {
        type: 'radio',
        options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
      },
    },
    alignItems: {
      control: {
        type: 'radio',
        options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
      },
    },
  },
  args: {
    children: 'Hello, World!',
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello, World!',
  },
};

export const FullScreen: Story = {
  args: {
    maxWidth: '100%',
    children: 'Hello, World!',
  },
};
