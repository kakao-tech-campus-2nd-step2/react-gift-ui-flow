import type { Meta, StoryObj } from '@storybook/react'
import { UnderlineTextField } from '@components/common/TextField/UnderlineTextField'

const meta = {
	title: 'Example/Input',
	component: UnderlineTextField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		placeholder: { control: 'text' },
	},
	args: {
		placeholder: 'placeholder',
	},
} satisfies Meta<typeof UnderlineTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		placeholder: 'placeholder',
		invalid: false,
		disabled: false,
	},
}
