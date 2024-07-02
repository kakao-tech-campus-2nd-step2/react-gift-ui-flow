import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Image from './index';

const meta = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      options: ['square', '16 / 9', '4 / 3'],
      control: { type: 'radio' },
    },
    radius: {
      options: ['circle', 0, 5, 10, 15],
      control: { type: 'radio' },
    },
    src: {
      control: { type: 'text' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SquareImage: Story = {
  args: {
    ratio: 'square',
    radius: 0,
    src: 'https://i.imgur.com/MK3eW3As.jpg',
  },
};

export const CircleImage: Story = {
  args: {
    ratio: '16 / 9',
    radius: 'circle',
    src: 'https://i.imgur.com/MK3eW3As.jpg',
  },
};

export const LargeRoundedImage: Story = {
  args: {
    ratio: '4 / 3',
    radius: 15,
    src: 'https://i.imgur.com/MK3eW3As.jpg',
  },
};
