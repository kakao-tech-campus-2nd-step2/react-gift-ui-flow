import type { Meta, StoryObj } from '@storybook/react';

import type { HeaderProps } from './Header';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const WithImage: Story = {
  args: {
    title: '선물하기',
    imageUrl: 'https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png',
  },
};
