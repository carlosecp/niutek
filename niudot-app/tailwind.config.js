module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					1000: '#25272A',
					1100: '#1C1E21',
					text: '#CFCFD0'
				}
			},
			transitionDelay: {
				25: '25ms'
			}
		},
		screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' }
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
