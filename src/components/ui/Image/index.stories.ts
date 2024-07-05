import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_IMAGE_URL } from '@/constants/data';

import { Image } from '@/components/ui/Image/Default';

const meta: Meta<typeof Image> = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'object',
      description: '`number` `square`',
    },
    radius: {
      control: 'object',
      description: '`number` `circle`',
    },
    width: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
  },
  args: {
    width: '200px',
    src: DEFAULT_IMAGE_URL,
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};

export const RatioSquare: Story = {
  args: {
    ratio: 'square',
  },
};

export const RadiusCircle: Story = {
  args: {
    ratio: 'square',
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    radius: 16,
  },
};
