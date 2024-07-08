import { Meta, StoryObj } from '@storybook/react';
import Image from '@components/Image/Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    width: { control: 'text' },
    ratio: { control: 'text' },
    radius: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    alt: 'Placeholder Image',
    width: '100%',
    ratio: 'square',
    radius: 10,
  },
};