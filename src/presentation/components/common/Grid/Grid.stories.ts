import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '@components/common/Grid/Grid'

const meta = {
	title: 'Example/Grid',
	component: Grid,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		columns: 3,
		gap: 3,
		children: 'æ»≥Á«œººø‰..',
	},
}
