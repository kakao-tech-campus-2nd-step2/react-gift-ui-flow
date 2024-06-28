import { Image, IImage } from '@/components/Image';
import { StoryFn, Meta } from '@storybook/react';

export default {
  component: Image,
  title: 'Image',
} as Meta;

const Template: StoryFn<IImage> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  radius: 'circle',
  ratio: 'auto',
};
