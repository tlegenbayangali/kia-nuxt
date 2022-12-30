<template v-if="item">
	<li class="desktop-menu-item mx-5">
		<span @click.prevent="$emit('openSubMenu')">
			<nuxt-link
				:class="{
					'has-submenu': item.hasOwnProperty('children'),
				}"
				class="desktop-item-link py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
				v-if="item.to !== '#'"
				:to="item.to"
				>{{ item.title }}</nuxt-link
			>
			<span
				:class="{
					'has-submenu': item.hasOwnProperty('children'),
				}"
				class="desktop-item-link py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0 cursor-pointer"
				v-else
				event=""
			>
				{{ item.title }}
			</span>
		</span>
		<transition name="slide-fade">
			<MenuChild
				:navigationItems="item.children"
				:navigationTitle="item.title"
				:currentClickProps="currentClick === idx"
				v-if="item.hasOwnProperty('children')"
				v-show="currentClick === idx"
			/>
		</transition>
	</li>
</template>
<script>
import MenuChild from './MenuChild.vue'

export default {
	// inject: ['message'],
	emits: ['openSubMenu'],
	props: {
		item: {
			required: true,
		},
		idx: {
			required: true,
		},
		currentClick: {
			type: [Boolean, Number],
		},
	},
	components: { MenuChild },
}
</script>

<style lang="scss">
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	// transform: translateX(-100px);
	opacity: 0;
}
@media screen and (min-width: 300px) and (max-width: 960px) {
	.slide-fade-enter-active {
		transition: all 0.1s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(-180px);
		opacity: 0;
	}
}
</style>
