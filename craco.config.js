const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/presentation/components'),
			'@pages': path.resolve(__dirname, 'src/presentation/pages'),
			'@utils': path.resolve(__dirname, 'src/shared/utils'),
			'@hooks': path.resolve(__dirname, 'src/presentation/hooks'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
}
