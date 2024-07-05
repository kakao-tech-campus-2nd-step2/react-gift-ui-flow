import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '@components/common/Image/Image'

const meta = {
	title: 'Example/Image',
	component: Image,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
		width: '100px',
		ratio: 'square',
		radius: 'circle',
	},
}

export const Secondary: Story = {
	args: {
		src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
		width: '200px',
		ratio: 'square',
		radius: '3',
	},
}

export const Large: Story = {
	args: {
		src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
		width: '100px',
		ratio: 5,
		radius: 'auto',
	},
}

export const Small: Story = {
	args: {
		src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
		width: '200px',
		ratio: 3,
		radius: '20',
	},
}
