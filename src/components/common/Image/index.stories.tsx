import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: 'https://images.khan.co.kr/article/2023/05/09/news-p.v1.20230509.81d6231f8f364496a03089815eef0340.jpg'
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatioSquare: Story = {
  args: {
    width: '30%',
    ratio: 'square',
  },
};

export const RadiusCircle: Story = {
  args: {
    width: '30%',
    ratio: 'square',
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    width: '30%',
    radius: 10,
  },
};
