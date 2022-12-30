<template>
	<form class="w-[620px] mx-auto">
		<div>
			<div class="mb-2 text-2xl font-bold">{{ title }}</div>
			<div class="mb-5 md:mb-2 text-sm">
				Поля, отмеченные *, обязательны для заполнения
			</div>
		</div>
		<slot></slot>
	</form>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
			default: 'Закажите звонок',
		},
	},
}
</script>
