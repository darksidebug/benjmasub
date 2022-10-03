/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html"
	],
  theme: {
		extend: {
			colors: {
				'blue1': '#EFFFFD',
				'blue2': '#B8FFF9',
				'blue3': '#85F4FF',
				'blue4': '#42C2FF'
			},
		},
	},
  plugins: [],
}

