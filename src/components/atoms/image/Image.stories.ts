import type { Meta, StoryObj } from '@storybook/react';
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
    src: 'https://raw.githubusercontent.com/cla6shade/Cla6Shade/master/banner.png',
  },
};
export const RoundedImage: Story = {
  args: {
    radius: 20,
    ratio: 16 / 9,
    src: 'https://raw.githubusercontent.com/cla6shade/Cla6Shade/master/banner.png',
  },
};
export const SquaredImage: Story = {
  args: {
    radius: 20,
    ratio: 'square',
    src: 'https://raw.githubusercontent.com/cla6shade/Cla6Shade/master/banner.png',
  },
};
