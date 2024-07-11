import type { StorybookConfig } from '@storybook/react-webpack5'

const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],

	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	staticDirs: ['../public'],
	webpackFinal: async (config, { configType }) => {
		config.module?.rules?.push({
			test: /\.scss|.sass$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		})

		config.resolve!.plugins = [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, '../tsconfig.json'),
			}),
		]

		return config
	},
}
export default config
