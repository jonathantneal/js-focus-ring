export default {
	entry: 'js-focus-ring.js',
	dest: 'js-focus-ring.env.js',
	format: 'iife',
	moduleName: 'jsFocusRing',
	sourceMap: 'js-focus-ring.env.js.map',
	plugins: [
		require('rollup-plugin-babel')({
			babelrc: false,
			presets: [
				[
					require('babel-preset-env'),
					{
						modules: false
					}
				]
			]
		}),
		require('rollup-plugin-uglify')()
	]
};
