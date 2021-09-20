const path = require('path');

module.exports = {
  "stories": [
		'../../node_modules/@my-company/core/**/*.stories.@(js|jsx|ts|tsx)'
		
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// 'PRODUCTION' is used when building the static version of storybook.

		config.module.rules.push({
			test: /\.njk$/,
			use: [
				{
					loader: 'simple-nunjucks-loader',
					options: {
						searchPaths: [
							// ** With this config Storybook will start without errors on Terminal, but will throw an error
							//    on browser console for every template that require a nunjucks partial ** //
							// ** Error: template not found: icon/macro.njk ** //
							// path.resolve(__dirname, '../../node_modules/@my-company/core/components/atoms'),
							// path.resolve(__dirname, '../../node_modules/@my-company/core/components/molecules'),

							// ** With this config Storybook won't start as Terminal throw some errors ** //
							// ** Error: Cannot find module '@my-company/core/components/atoms' ** //
							require.resolve('@my-company/core/components/atoms'),
							require.resolve('@my-company/core/components/molecules'),
						]
				}
				}
			]
		});

		// Return the altered config
		return config;
	}
}