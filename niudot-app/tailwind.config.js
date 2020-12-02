module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					0: '#1C1E21',
					'dark-overlay': '#25272A',
					'dark-text': '#CFCFD0',
					'darker-bg': '#151618'
				}
			},
			transitionDelay: {
				25: '25ms'
			},
			padding: {
				18: '4.5rem'
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
