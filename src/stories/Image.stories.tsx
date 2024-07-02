import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Image from '../components/Image/Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const RatioSquare: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    width: '200px',
    ratio: 'square',
    radius: 0,
  },
};

export const RadiusCircle: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    width: '200px',
    ratio: 'square',
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    radius: 10,
  },
};
