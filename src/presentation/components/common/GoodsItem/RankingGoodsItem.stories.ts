import type { Meta, StoryObj } from '@storybook/react'
import { RankingGoodsItem } from '@components/common/GoodsItem/RankingGoodsItem'

const meta = {
	title: 'Example/RankingGoodsItem',
	component: RankingGoodsItem,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
} satisfies Meta<typeof RankingGoodsItem>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		imageSrc:
			'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
		subTitle: '동해물과 백두산이 마르고 닳도록',
		title: '왜 스토리북은 이렇게',
		amount: 1000000000,
		rankingIndex: 2,
	},
}
