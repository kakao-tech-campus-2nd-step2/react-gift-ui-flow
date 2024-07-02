import type { Meta,StoryFn } from '@storybook/react';

import type { IImage } from '@/components/Image';
import { Image } from '@/components/Image';

export default {
  component: Image,
  title: 'Image',
} as Meta;

const Template: StoryFn<IImage> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  radius: 'circle',
  ratio: 'square',
};
