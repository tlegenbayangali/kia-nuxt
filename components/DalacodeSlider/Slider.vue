<template>
	<div class="relative dalacode-slider" :class="[className]">
		<div class="swiper-wrapper">
			<slot></slot>
		</div>
		<div class="slider-navigation hidden xl:block">
			<button
				class="left-0 w-[60px] h-[60px] flex items-center rounded-full arrow arrow-prev swiper-button-prev"
			>
				<svg
					width="21"
					height="20"
					viewBox="0 0 21 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid"
					class=""
				>
					<path
						d="M8 4l-6 6 6 6M2.5 10H21"
						stroke="currentColor"
						stroke-width="1.5"
					></path>
				</svg>
			</button>
			<button
				class="right-0 w-[60px] h-[60px] flex items-center rounded-full arrow arrow-next swiper-button-next"
			>
				<svg
					width="21"
					height="20"
					viewBox="0 0 21 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid"
					class=""
				>
					<path
						d="M13 16l6-6-6-6M18.5 10H0"
						stroke="currentColor"
						stroke-width="1.5"
					></path>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
import { Swiper} from 'swiper/bundle'
export default {
	props: {
		className: {
			type: String,
		},
	},
	data() {
		return {}
	},
	methods: {
		getRandomInt() {
			return Math.floor(Math.random() * (99999999 - 10000000)) + 10000000
		},
		dalacodeSlider(arr = []) {
			const dalacodeSliders =
				document.querySelectorAll('.dalacode-slider')
			dalacodeSliders.forEach((item) => {
				const sectionId = `dalacode_section_${this.getRandomInt()}`
				const instanceObject = {}
				if (item) {
					item.setAttribute('id', sectionId)
					instanceObject.id = sectionId
					instanceObject.swiperInstance = new Swiper(
						`#${sectionId}`,
						{
							slidesPerView: 'auto',
							spaceBetween: 40,
							navigation: {
								nextEl: '.arrow-next',
								prevEl: '.arrow-prev',
							},
							observer: true,
							observeParents: true,
						}
					)
					arr.push(instanceObject)
				}
			})
			return arr
		},
	},
	computed: {
		filterDalacodeSlider() {
			if (process.client) {
				this.dalacodeSlider().forEach((item) => {
					item.swiperInstance.update()
				})
			}
		},
	},
	mounted() {
		this.dalacodeSlider()
	},

	created() {},
}
</script>

<style lang="scss" scoped></style>
