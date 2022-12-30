<template>
	<div class="checkbox relative">
		<div class="w-full">
			<input
				:id="id"
				type="checkbox"
				class="absolute w-[1px] h-[1px] opacity-0 bg-transparent outline-0"
			/>
			<label
				class="inline-flex items-center relative pl-[30px] leading-5 cursor-pointer"
				:for="id"
			>
				<span class="text-xs">
					Даю согласие на обработку своих персональных данных на
					условиях, <a class="underline" href="#">указанных здесь</a>.
				</span>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			required: true,
			type: [String, Number],
		},
		text: {
			type: String,
			required: false,
			default: 'Текст',
		},
	},
	data() {
		return {}
	},
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] + label:before {
	content: '';
	@apply absolute top-[-1px] left-0 w-[20px] h-[20px] border-black border m-auto;
}
input[type='checkbox'] + label::after {
	content: '';
	@apply bg-[url('~static/images/svg/check-black.svg')] bg-no-repeat bg-center opacity-0 absolute top-[-1px] left-0 w-[20px] h-[20px] transition-all duration-100 ease-in m-auto;
}
input[type='checkbox']:checked + label:after {
	@apply opacity-100;
}
</style>
