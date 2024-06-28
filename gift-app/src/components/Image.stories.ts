import { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    width: { control: 'text' },
    ratio: { control: 'text' },
    radius: {
      control: {
        type: 'select',
        options: ['circle', 10, 20, 30],
      },
    },
    alt: { control: 'text' },
  },
} as Meta;

type Story = StoryObj<ImageProps>;

export const Default: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Placeholder Image',
    width: '150px',
    ratio: 'square',
    radius: 10,
  },
};