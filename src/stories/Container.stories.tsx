import type { Meta, StoryFn } from '@storybook/react';

import type { IContainer } from '@/components/common/Layout/Container';
import { Container } from '@/components/common/Layout/Container';

export default {
  component: Container,
  title: 'Container',
} as Meta;

const Template: StoryFn<IContainer> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxWidth: '100px',
  children: 'Hello, world!',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
