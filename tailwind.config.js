/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
	'./pages/*.html',
    './js/*.js'
  ],

  darkMode: 'class',

  theme: {	
	extend: {
		colors: {
			'text': 'var(--text)',
			'background': 'var(--background)',
			'cardBackground': 'var(--cardBackground)',
			'primary': 'var(--primary)',
			'secondary': 'var(--secondary)',
			'accent': 'var(--accent)',
			},

		borderRadius: {
			DEFAULT: '10px'
		},
		
		fontFamily: {
			'sans': ['Poppins', 'sans-serif']
		},

		spacing: {
			'504': '504px',
			'443': '443px',
			'281': '281px'
		}
	},
  },
  plugins: [],
}

