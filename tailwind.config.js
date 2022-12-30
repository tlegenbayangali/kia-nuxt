module.exports = {
	content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
	],
	darkMode: 'class',
	theme: {
		screens: {
			'sm': '540px',
			// => @media (min-width: 576px) { ... }

			'md': '720px',
			// => @media (min-width: 768px) { ... }

			'lg': '960px',
			// => @media (min-width: 992px) { ... }

			'xl': '1140px',
			// => @media (min-width: 1200px) { ... }

			'2xl': '1320px',
			// => @media (min-width: 1400px) { ... }
		},
		fontFamily: {
			"kia": ["KIA"]
		},
		container: {
			"center": true,
			"padding": '12px',
		},
		extend: {
			colors: {
				"red": "#BF0C0D",
				"lgray": "#F2F2F2",
				"white": "#FFFFFF",
				"black": "#060606",
				"gray": "#CCCCCC",
				"dgray": "#666",
				"dark": "#05141F",
				"green": "#5D7D2B",
				"yellow": "#F3C300",
				"disabled": "#999",
				"pattensBlue": "#D9E1E5",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
}
