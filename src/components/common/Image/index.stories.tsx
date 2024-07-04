import { Meta, StoryObj } from '@storybook/react';
import Image, { ImageProps } from '@/components/common/Image';

const meta: Meta<ImageProps> = {
  title: 'common/Image',
  tags: ['autodocs'],
  component: Image,
};

export default meta;

type Story = StoryObj<ImageProps>;

export const RatioSquare: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    width: 300,
    height: 300,
    ratio: 'square',
  },
};

export const RadiusCircle: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    width: 300,
    height: 300,
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    width: 300,
    height: 300,
    radius: 20,
  },
};
