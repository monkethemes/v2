/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	future: {
		hoverOnlyWhenSupported: true
	},
	theme: {
		colors: {
			bg: '#323437',
			main: '#e2b714',
			sub: '#646669',
			alt: '#2c2e31',
			text: '#d1d0c5',
			error: '#ca4754'
		},
		fontFamily: {
			brand: ['Lexend Deca', 'sans-serif'],
			main: ['Roboto Mono', 'monospace']
		},
		fontSize: {
			xs: '0.75rem',
			base: '1rem',
			xl: '1.25rem',
			title: '2rem'
		},
		extend: {
			borderRadius: {
				st: '2rem'
			},
			spacing: {
				xt: '550px',
				ft: '850px',
				st: '1250px'
			},
			screens: {
				xt: '550px',
				ft: '914px',
				st: '1250px'
			},
			zIndex: {
				n1: '-1',
				n2: '-2',
				n3: '-3',
				n4: '-4'
			},
			keyframes: {
				fadein: {
					'0%': {opacity: '0'},
					'10%': {opacity: '100%'}
				}
			},
			animation: {
				'fade-in': 'fadein 2s linear'
			}
		}
	}
};
