<template>
	<div
		ref="submenu"
		:class="{
			active: currentClickProps,
		}"
		class="submenu lg:py-[50px] lg:px-[80px]"
	>
		<div class="submenu-title border-gray border-b-[1px] block lg:hidden">
			<p
				@click.prevent="closeSubMenu()"
				class="text-lg font-bold py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
			>
				{{ navigationTitle }}
			</p>
		</div>
		<div
			class="submenu-container py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
		>
			<ul class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
				<li
					class="desktop-menu-item mx-5"
					v-for="(item, idx) in navigationItems"
					:key="idx"
				>
					<span @click.prevent="openSubMenu(idx)">
						<nuxt-link
							:class="{
								'has-submenu': item.hasOwnProperty('children'),
							}"
							class="desktop-item-link py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
							v-if="item.to !== '#'"
							:to="item.to"
							>{{ item.title }}
						</nuxt-link>
						<span
							:class="{
								'has-submenu': item.hasOwnProperty('children'),
							}"
							class="desktop-item-link py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0 cursor-pointer"
							v-else
							event=""
							>{{ item.title }}</span
						>
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
			</ul>
		</div>
	</div>
</template>
<script>
import MenuChild from './MenuChild.vue'
export default {
	inject: ['isShowBackground'],
	props: {
		navigationItems: {
			required: true,
			type: Array,
		},
		navigationTitle: {
			required: true,
			type: String,
		},
		currentClickProps: {
			required: true,
		},
	},
	data() {
		return {
			currentClick: false,
		}
	},
	methods: {
		openSubMenu(activeSubMenu) {
			if (activeSubMenu === this.currentClick) {
				this.currentClick = false
			} else {
				this.currentClick = activeSubMenu
			}
		},
		closeSubMenu() {
			this.$refs.submenu.classList.remove('active')
		},
	},

	components: { MenuChild },
}
</script>
