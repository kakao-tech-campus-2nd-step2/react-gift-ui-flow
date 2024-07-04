import type { Meta, StoryFn } from '@storybook/react';

import Header, { HeaderSubtitle,HeaderTitle } from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn = (args) => (
  <Header>
    <HeaderTitle>{args.title}</HeaderTitle>
    <HeaderSubtitle>{args.subtitle}</HeaderSubtitle>
  </Header>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Header Title',
  subtitle: 'Header Subtitle',
};
