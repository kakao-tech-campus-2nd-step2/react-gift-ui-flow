import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Image from '../components/Image/Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    ratio: {
      control: {
        type: 'select',
        options: ['square', 16 / 9, 4 / 3, 1, 3 / 2, 2 / 3, 9 / 16],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['circle', 0, 4, 8, 16, 32, 64],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Placeholder Image',
    ratio: 1,
    radius: 0,
  },
};

export const Square: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Square Image',
    ratio: 'square',
    radius: 0,
  },
};

export const Circle: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Circle Image',
    ratio: 1,
    radius: 'circle',
  },
};

export const Rounded: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Rounded Image',
    ratio: 1,
    radius: 10,
  },
};
