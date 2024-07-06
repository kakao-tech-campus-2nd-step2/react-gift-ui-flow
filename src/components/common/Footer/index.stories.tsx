import type { Meta, StoryFn } from '@storybook/react';

import type { FooterProps } from './index';
import Footer from './index';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Footer Title',
};
