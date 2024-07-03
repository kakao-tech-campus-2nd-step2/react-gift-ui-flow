import type { Meta, StoryFn } from '@storybook/react';

import type { HeaderProps } from './index';
import Header from './index'; // HeaderProps import


export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Header Title',
};
