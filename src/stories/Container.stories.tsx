import { Container, IContainer } from '@/components/Layout/Container';
import { StoryFn, Meta } from '@storybook/react';

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
