import {resolve} from "path";

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	// Loading
	loading: {
		color: "black",
		height: "50px",
	},
	head: {
		title: "Kia - Офицальный дилер",
		htmlAttrs: {
			lang: "ru",
		},
		meta: [
			{charset: "utf-8"},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{hid: "description", name: "description", content: ""},
			{name: "format-detection", content: "telephone=no"},
		],
		link: [
			{
				rel: "icon",
				href: "images/icons/cropped-favicon_114px-32x32.webp",
				sizes: "32x32",
			},
			{
				rel: "icon",
				href: "images/icons/cropped-favicon_114px-192x192.webp",
				sizes: "192x192",
			},
			{
				rel: "apple-touch-icon",
				href: "images/icons/cropped-favicon_114px-180x180.webp",
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/scss/main.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		"~/plugins/clickOutside.js",
		// '~/plugins/scroll.client.js',
		// "~/plugins/sticksy.client.js",
		"~/plugins/sticky.client.js",
		"~/plugins/multiSelect.js",
		"~/plugins/directives.js",
		"~/plugins/mask.js",
		"~/plugins/vee-validate.js",
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxt/postcss8",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// '@nuxt/image',
		"@nuxtjs/i18n",
	],

	i18n: {
		locales: [
			{
				code: "ru",
				name: "Рус",
			},
			{
				code: "kk",
				name: "Каз",
			},
		],
		defaultLocale: "ru",
		strategy: "prefix",
		vueI18n: {
			fallbackLocale: "ru",
			messages: {
				ru: {
					models: "Модельный ряд",
					"select model": "Выберите модельsss",
					selected: "Выбрано",
				},
				kk: {
					models: "Модельдік қатар",
					"select model": "Модельді тандаңыз",
					selected: "Таңдалды",
				},
			},
		},
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: "/",
	},

	router: {
		baseURL: "/",
		mode: "history",
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
};
