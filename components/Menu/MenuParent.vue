<template>
	<ul
		class="flex items-center menu-desktop-list menu-mobile-list"
		v-click-outside="onClickOutside"
	>
		<MenuItem
			v-for="(item, idx) in navigationItems"
			@openSubMenu="openSubMenu(idx, item.children)"
			:key="idx"
			:item="item"
			:idx="idx"
			:currentClick="currentClick"
		/>
	</ul>
</template>
<script>
export default {
	props: {
		navigationItems: {
			required: true,
			type: Array,
		},
	},
	provide() {
		return {
			openSubMenu: this.openSubMenu,
		}
	},
	data() {
		return {
			currentClick: false,
		}
	},
	methods: {
		openSubMenu(activeSubMenu, children = null) {
			if (activeSubMenu === this.currentClick) {
				this.currentClick = false
				this.$parent.isShowBackground = false
				document.body.style.overflowY = 'scroll'
			} else {
				this.currentClick = activeSubMenu

				if (children) {
					this.$parent.isShowBackground = activeSubMenu
					document.body.style.overflowY = 'hidden'
				} else {
					this.$parent.isShowBackground = false
					document.body.style.overflowY = 'scroll'
				}
			}
		},
		onClickOutside() {
			this.currentClick = false
			this.$parent.isShowBackground = false
			document.body.style.overflowY = 'scroll'
		},
	},
}
</script>
