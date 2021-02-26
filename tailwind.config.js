const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		extend: {
			spacing: {
				input: '38px'
			},
			transitionProperty: {
				left: 'left',
				right: 'right'
			},
			strokeWidth: {
				0.5: '0.5'
			}
		},
		colors: {
			light: '#f1f5f8',
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
			emerald: colors.emerald
		},
		container: {
			center: true,
			padding: '1rem'
		},
		scale: {
			102: '1.02'
		}
	},
	variants: {
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
			padding: ['last'],
			margin: ['last']
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
