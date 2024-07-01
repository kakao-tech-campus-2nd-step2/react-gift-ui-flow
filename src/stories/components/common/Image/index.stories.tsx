import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatioSquare: Story = {
  args: {
    width: '100px',
    ratio: 'square',
  },
};

export const RadiusCircle: Story = {
  args: {
    width: '100px',
    ratio: 'square',
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    radius: 10,
  },
};
