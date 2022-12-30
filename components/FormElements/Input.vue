<template>
	<div class="flex" :class="width">
		<div
			class="form-control form-control__text flex items-end flex-wrap mb-[20px] pt-[30px] pb-[3px] h-[60px] w-full relative border-b border-b-gray"
			:class="{
				'has-focus': isHasFocus,
				'has-error': isHasError,
			}"
		>
			<div class="form-control__container w-full flex">
				<input
					v-maska="mask"
					class="focus:ring-0 block relative z-[2] h-[30px] w-full bg-transparent p-[0] outline-[0] border-[0]"
					v-model="inputTitle"
					@focus="input"
					@blur="input"
					type="text"
					autocomplete="on"
				/>
				<div class="line"></div>
				<label
					class="transition-all duration-150 absolute z-[3] top-[32px] left-0 right-0 text-dark leading-5 pointer-events-none"
				>
					<span>{{ title }}</span>
				</label>
				<span
					v-show="isHasError"
					class="form-control__error text-red block mt-[5px] normal-case text-xs"
					>{{ errorTexts }}</span
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: [Number, String],
			required: true,
		},
		errorTexts: {
			type: [Array, String, Object],
			default: 'Поле обязательно для заполнения',
		},
		isRequired: {
			type: Boolean,
			default: false,
		},
		mask: {
			type: [String, Number],
		},
		width: {
			type: String,
			default: 'basis-1/2',
		},
	},
	data() {
		return {
			isHasFocus: false,
			isHasError: false,
			inputTitle: '',
		}
	},
	methods: {
		input() {
			this.isHasFocus = !this.isHasFocus

			if (this.inputTitle.length >= 1) {
				this.isHasFocus = true
				this.isHasError = false
			} else {
				this.isHasError = true
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.form-control {
	&__text {
		&.has-error {
			@apply mb-[20px] border-b-red;

			.form-control__error {
				@apply absolute left-0 right-0 top-full;
			}
		}
		&.has-focus {
			label {
				@apply top-[5px] text-xs;
			}
		}
		.line {
			&::before,
			&::after {
				content: '';
				@apply absolute bg-black;
				width: 0px;
				height: 3px;
				bottom: -1px;
				transition: all 0.3s ease;
			}
			&::before {
				left: 50%;
			}
			&::after {
				right: 50%;
			}
		}
		input:focus ~ .line:before {
			width: 50%;
		}
		input:focus ~ .line:after {
			width: 50%;
		}
	}
}
</style>
