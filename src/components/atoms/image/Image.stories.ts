import type { Meta, StoryObj } from '@storybook/react';
import { TEST_IMAGE_URL } from '@/constants';
import Image from './Image';

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const CircledImage: Story = {
  args: {
    radius: 'circle',
    ratio: 16 / 9,
    src: TEST_IMAGE_URL,
  },
};

export const RoundedImage: Story = {
  args: {
    radius: 20,
    ratio: 16 / 9,
    src: TEST_IMAGE_URL,
  },
};

export const SquaredImage: Story = {
  args: {
    radius: 20,
    ratio: 'square',
    src: TEST_IMAGE_URL,
  },
};
