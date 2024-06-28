import { Grid, IGrid } from '@/components/Layout/Grid';
import { StoryFn, Meta } from '@storybook/react';

export default {
  component: Grid,
  title: 'Grid',
} as Meta;

const Template: StoryFn<IGrid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  gap: 1,
  children: Array.from({ length: 16 }, (_, index) => <div key={index}>{index + 1}</div>),
  columns: 3,
};
