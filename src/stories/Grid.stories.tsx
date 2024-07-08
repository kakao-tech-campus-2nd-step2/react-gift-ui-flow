import type { Meta, StoryFn } from '@storybook/react';

import type { IGrid } from '@/components/common/Layout/Grid';
import { Grid } from '@/components/common/Layout/Grid';

export default {
  component: Grid,
  title: 'Grid',
} as Meta;

const Template: StoryFn<IGrid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: Array.from({ length: 16 }, (_, index) => <div key={index}>{index + 1}</div>),
  columns: 3,
};
