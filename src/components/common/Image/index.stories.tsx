import { Meta, StoryObj } from '@storybook/react';
import Image, { ImageProps } from '@components/common/Image';

const IMAGE_SRC = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png';
const IMAGE_SIZE = 300;
const IMAGE_RADIUS = 20;

const meta: Meta<ImageProps> = {
  title: 'common/Image',
  tags: ['autodocs'],
  component: Image,
};

export default meta;

type Story = StoryObj<ImageProps>;

export const RatioSquare: Story = {
  args: {
    src: IMAGE_SRC,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    ratio: 'square',
  },
};

export const RadiusCircle: Story = {
  args: {
    src: IMAGE_SRC,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    src: IMAGE_SRC,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    radius: IMAGE_RADIUS,
  },
};
