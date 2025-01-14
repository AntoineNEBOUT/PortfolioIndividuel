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
			'primary25': 'var(--primary25)',
			'secondary': 'var(--secondary)',
			'accent': 'var(--accent)',
			'primaryGray': 'var(--primaryGray)',
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
  }
}

