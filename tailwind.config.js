/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],

  darkMode: 'class',

  theme: {	
	extend: {
		colors: {
			'text': 'var(--text)',
			'background': 'var(--background)',
			'primary': 'var(--primary)',
			'secondary': 'var(--secondary)',
			'accent': 'var(--accent)',
			},

		borderRadius: {
			DEFAULT: '10px'
		},
		
		fontFamily: {
			'sans': ['Poppins', 'sans-serif']
		}
	},
  },
  plugins: [],
}

