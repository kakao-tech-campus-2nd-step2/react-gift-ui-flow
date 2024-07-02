import { UnderlineTextField, IUnderlineTextField } from '@/components/Form/Input/UnderlineTextField';
import { StoryFn, Meta } from '@storybook/react';

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
