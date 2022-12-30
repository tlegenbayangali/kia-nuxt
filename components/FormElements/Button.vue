<template>
	<div
		class="btn-wrapper"
		:class="[
			{
				'btn-wrapper-lg': btnWrapperSize === 'lg',
				'btn-wrapper-xl': btnWrapperSize === 'xl',
				'btn-wrapper-transparent': btnWrapperType === 'transparent',
				'btn-wrapper-black': btnWrapperType === 'black',
				'btn-wrapper-white': btnWrapperType === 'white',
			},
		]"
	>
		<a v-if="isLink" :href="btnHref" class="btn btn-black btn-lg">
			{{ btnText }}
		</a>
		<button v-else class="btn btn-black btn-lg">{{ btnText }}</button>
	</div>
</template>

<script>
export default {
	props: {
		/*
		 *Button wrapper
		 */
		btnWrapperSize: {
			type: String,
			default: 'lg',
		},
		btnWrapperType: {
			type: String,
			default: 'transparent',
		},
		/*
		 *Button
		 */
		btnText: {
			type: String,
			default: 'Кнопка',
		},
		btnHref: {
			type: String,
			default: '#',
		},
		isLink: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
	@apply cursor-pointer text-center inline-block;

	&:hover .btn {
		&:after {
			transform: translateX(-50%) scale(1);
		}
	}

	// SIZES
	&-lg {
		@apply py-[22px] px-[40px];
	}
	&-xl {
		@apply py-[14px] px-[20px] w-full;
	}

	// COLORS
	&-black {
		@apply bg-dark;
		.btn {
			@apply text-white;

			&:after {
				@apply bg-white;
			}
		}
	}

	&-transparent {
		background-color: transparent;
		border: 1px solid white;
		.btn {
			@apply text-white;

			&:after {
				@apply bg-white;
			}
		}
	}

	&-white {
		@apply bg-white;

		.btn {
			@apply text-dark;

			&:after {
				@apply bg-dark;
			}
		}
	}

	// GENERAL
	.btn {
		@apply relative border-none font-bold inline-block;
		&:after {
			content: '';
			@apply absolute bottom-[-5px] w-full h-[1px] left-[50%];
			transform: translateX(-50%) scale(0);
			transition: 0.3s all ease;
			transform-origin: left;
		}
	}
}
</style>
