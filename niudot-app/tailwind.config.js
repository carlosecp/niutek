module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					'cstm-0': '#1C1E21',
					'cstm-1': '#27292c',
					'cstm-2': '#333538',
					'cstm-3': '#3f4144',
					'cstm-4': '#4b4d4f',
					'cstm-5': '#57595b',
					'cstm-6': '#636467',
					'cstm-7': '#6f7072',
					'cstm-8': '#7b7c7e',
					'cstm-9': '#87888a',
					'cstm-10': '#939495',
					'cstm-11': '#9f9fa1',
					'cstm-12': '#ababad',
					'cstm-13': '#b7b7b8',
					'cstm-14': '#c3c3c4',
					'cstm-15': '#cfcfd0'
				}
			},
			spacing: {
				std: '2.5rem'
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
