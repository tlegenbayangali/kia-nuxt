<template>
	<div class="flex flex-col basis-1/2">
		<div class="mb-[15px]">Тип вопроса</div>
		<div class="custom-select">
			<MultiSelect
				v-model="currentValue"
				track-by="title"
				label="title"
				selectLabel=""
				deselectLabel=""
				selectedLabel=""
				:allow-empty="false"
				placeholder="Выберите тип вопроса"
				:options="lists"
				:searchable="false"
			>
				<template slot="singleLabel" slot-scope="{ option }">
					{{ option.title }}
				</template>
			</MultiSelect>
		</div>
	</div>
</template>

<script>
import MultiSelect from 'vue-multiselect'
export default {
	components: {
		MultiSelect,
	},
	props: {
		lists: {
			type: [Array],
			required: false,
		},
	},
	data() {
		return {
			currentValue: [],
		}
	},
	methods: {},
	mounted() {},
}
</script>

<style lang="scss">
.custom-select {
	.multiselect {
		@apply h-[40px];
		font-size: 15px;
		&__tags {
			padding: 0 35px 0 15px;
			border-radius: 0;
			font-size: inherit;
			@apply border-gray cursor-pointer text-inherit bg-transparent h-[40px] flex items-center w-full min-h-0;
		}
		&__placeholder {
			@apply text-black mb-0 pt-[2px] inline-block;
		}
		&__select {
			background: url('~static/images/svg/arrow-right.svg') no-repeat 50%;
			@apply text-black w-[15px] h-[15px] absolute top-[35%] right-[4%] p-0 m-0 rotate-[90deg];
			&::before {
				@apply hidden;
			}
		}
		&__single {
			text-overflow: ellipsis;
			min-height: 0;
			font-size: inherit;
			line-height: 1.2;
			border-radius: 0;
			transition: border 0.1s ease;
			vertical-align: top;
			@apply text-black block max-h-[2.4em] bg-none w-full border-none box-border p-0 m-0 overflow-hidden;
		}
		&--active {
			.multiselect__select {
				@apply rotate-[270deg];
			}
		}
		&__content-wrapper {
			@apply py-[5px] border-[rgba(5,20,31,.3)]  bg-white;
			border: 1px solid;
			border-radius: 0;
			ul {
				li {
					font-size: 15px;
					font-weight: 400;
					line-height: 1;
					@apply text-black m-0 p-0;
					letter-spacing: 0.001em;
					list-style: none;
					&:hover {
						@apply bg-lgray;
					}
					.multiselect__option {
						padding: 0 35px 0 15px;
						min-height: 0;
						line-height: 20px;
						@apply text-black bg-transparent whitespace-normal;
					}
				}
			}
		}
	}
}
</style>
