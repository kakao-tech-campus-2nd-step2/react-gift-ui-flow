import type { Meta,StoryFn } from '@storybook/react';

import type { IUnderlineTextField } from '@/components/Form/Input/UnderlineTextField';
import { UnderlineTextField } from '@/components/Form/Input/UnderlineTextField';

export default {
  component: UnderlineTextField,
  title: 'UnderlineTextField',
} as Meta;

const Template: StoryFn<IUnderlineTextField> = (args) => <UnderlineTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  variant: 'responsive',
  invalid: false,
  disabled: false,
};
