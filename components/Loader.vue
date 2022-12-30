<template>
	<div
		ref="loader"
		class="loader flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-dark z-[1000] opacity-1 pointer-events-none ease-in overflow-hidden"
	>
		<img
			class="w-[80px] h-[40px]"
			src="~static/images/svg/kia-logo-new.svg"
			alt=""
		/>
	</div>
</template>

<script>
export default {
	mounted() {
		this.loaderBody()
	},
	methods: {
		loaderBody() {
			const body = document.querySelector('body')

			body.classList.add('is-loading')

			setTimeout(() => {
				body.classList.remove('is-loading')
				if (this.$refs.loader)
					this.$refs.loader.classList.add('loader-loaded')
			}, 1000)
		},
	},
	head: {
		bodyAttrs: {
			ref: 'body',
		},
	},
}
</script>

<style lang="scss" scoped>
.loader {
	transition: 0.2s all ease;
	&-loaded {
		@apply opacity-0 pointer-events-none;
	}
}
</style>
