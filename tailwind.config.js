const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				input: '38px',
			},
		},
		colors: {
			bgl0: '#f3f4f6',
			primary: colors.indigo['500'],
			error: colors.red['500'],
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			blue: colors.blue,
			green: colors.green,
			cyan: colors.cyan,
		},
		container: {
			center: true,
			padding: '1rem',
		},
		scale: {
			102: '1.02',
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
			padding: ['last'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
