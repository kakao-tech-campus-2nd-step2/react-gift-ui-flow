import type { Meta, StoryFn } from '@storybook/react';

import type { HeaderProps } from './SubHeader';
import Header from './SubHeader';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Header Label',
  title: 'Header Title',
  description: 'Header Description',
  backgroundColor: '#333'
};
