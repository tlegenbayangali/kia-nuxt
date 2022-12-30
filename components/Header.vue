<template>
	<header
		:class="{
			'h-full': isMenuMobile,
		}"
		class="w-full bg-white"
		id="header"
	>
		<div class="py-2.5 relative">
			<div class="container">
				<div class="grid grid-cols-1">
					<div
						:class="{
							'opacity-1 pointer-events-auto': isShowBackground,
							'opacity-0 pointer-events-none': !isShowBackground,
						}"
						class="show-bg"
					></div>
					<div
						class="header-top-inner flex justify-between items-center"
					>
						<div class="left flex items-center">
							<nuxt-link class="flex items-center" to="/">
								<svg class="w-[70px] h-[35px] block fill-dark">
									<use
										xlink:href="/images/svg/sprite.svg#kia-logo-new"
									></use>
								</svg>
								<div
									class="before:content-[''] before:block before:top-1/2 before:left-[-15px] before:absolute before:bg-dgray before:w-[1px] before:h-[20px] before:translate-y-[-50%] ml-8 text-base font-bold relative"
								>
									Tokyo
									<div
										class="mt-1.5 text-xs text-dgray font-[500]"
									>
										Официальный дилер Kia в г. Tokyo
									</div>
								</div>
							</nuxt-link>
						</div>
						<a
							@click.prevent="hamburger()"
							href="#"
							:class="{
								active: isMenuMobile,
							}"
							class="hamburger w-[20px] h-[50px] lg:hidden block"
						>
							<div class="hamburger-inner w-full h-full relative">
								<span
									class="block hamburger-stick w-[20px] h-[2px] bg-dark absolute left-[50%] translate-x-[-53%] top-[38%] transition-all ease-in"
								></span>
								<span
									class="block hamburger-stick w-[20px] h-[2px] bg-dark absolute left-[50%] translate-x-[-53%] bottom-[39%] transition-all ease-in"
								></span>
							</div>
						</a>

						<div class="hidden lg:flex">
							<svg
								width="14"
								height="18"
								viewBox="0 0 14 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.25 7.2C13.25 8.9657 12.2129 10.9683 10.8531 12.8025C9.5141 14.6086 7.95913 16.124 7.11791 16.8941C7.04771 16.9584 6.95229 16.9584 6.88209 16.8941L6.37565 17.4473L6.88209 16.8941C6.04087 16.124 4.4859 14.6086 3.14691 12.8025C1.78707 10.9683 0.75 8.9657 0.75 7.2C0.75 3.61771 3.568 0.75 7 0.75C10.432 0.75 13.25 3.61771 13.25 7.2Z"
									stroke="#05141F"
									stroke-width="1.5"
								/>
							</svg>
							<div class="ml-3.5 leading-none">
								<div>Sumida City, Tokyo 130-0012, Япония</div>
								<div class="text-xs text-dgray mt-1.5">
									дилерский центр
								</div>

								<!-- <a
									href="tel:"
									class="before:content-[''] before:block before:top-1/2 before:left-[-15px] before:absolute before:bg-dgray before:w-[1px] before:h-[20px] before:translate-y-[-50%] ml-8 relative block"
								>
									+7 778 290 5027
								</a> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			:class="{
				'h-full': isMenuMobile,
				'overflow-y-scroll': isMenuMobile,
			}"
			class="header-bottom bg-white lg:bg-lgray border-t-[1px] lg:border-y-[1px] border-y-gray relative"
		>
			<div class="container">
				<div class="grid grid-cols-1">
					<div
						:class="{
							active: isMenuMobile,
						}"
						class="menu-desktop menu-mobile lg:py-5"
					>
						<div class="flex justify-center menu-mobile-inner">
							<nav>
								<MenuParent
									:navigationItems="navigationItems"
								/>
							</nav>
							<div
								:class="{
									'mb-[70px]': isMenuMobile,
								}"
								class="block bg-lgray lg:hidden py-[30px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
							>
								<div class="right flex items-start">
									<svg
										width="14"
										height="18"
										viewBox="0 0 14 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.25 7.2C13.25 8.9657 12.2129 10.9683 10.8531 12.8025C9.5141 14.6086 7.95913 16.124 7.11791 16.8941C7.04771 16.9584 6.95229 16.9584 6.88209 16.8941L6.37565 17.4473L6.88209 16.8941C6.04087 16.124 4.4859 14.6086 3.14691 12.8025C1.78707 10.9683 0.75 8.9657 0.75 7.2C0.75 3.61771 3.568 0.75 7 0.75C10.432 0.75 13.25 3.61771 13.25 7.2Z"
											stroke="#05141F"
											stroke-width="1.5"
										/>
									</svg>
									<div class="right-wrapper pl-[13px]">
										<div class="right-address">
											Официальный дилер Kia в г. Семей
										</div>
										<div
											class="right-address-desc text-xs text-dgray"
										>
											дилерский центр
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import MenuParent from './Menu/MenuParent.vue'

export default {
	props: {},
	provide() {
		return {
			isShowBackground: this.isShowBackground,
		}
	},
	data() {
		return {
			navigationItems: [
				{
					title: 'Главная',
					to: '/',
				},
				{
					title: 'Тест',
					to: '/test',
				},
				{
					title: 'Пример 1',
					to: '#',
				},
				{
					title: 'Пример 2',
					to: '#',
				},
				{
					title: 'О нас',
					to: '#',
					children: [
						{
							title: 'О дилере',
							to: '/about/dealer',
						},
						{
							title: 'Контакты',
							to: 'about/contact',
						},
					],
				},
				{
					title: 'О нас 2',
					to: '#',
					children: [
						{
							title: 'О дилере 2',
							to: '#',
							children: [
								{
									title: 'SubSubmenu',
									to: '#',
									children: [
										{
											title: 'SubSubmenu 1.1',
											to: '/test',
										},
										{
											title: 'SubSubmenu 1.2',
											to: '#',
										},
									],
								},
								{
									title: 'SubSubmenu 2',
									to: '#',
								},
							],
						},
						{
							title: 'Контакты 2',
							to: 'about/contact',
						},
					],
				},
			],
			isMenuMobile: false,
			isShowBackground: false,
		}
	},
	methods: {
		hamburger() {
			if (this.isMenuMobile === false) {
				this.isMenuMobile = true
				document.body.style.overflowY = 'hidden'
			} else {
				this.isMenuMobile = false
				document.body.style.overflowY = 'scroll'
			}
		},
	},
	watch: {
		$route() {
			this.isMenuMobile = false
			document.body.style.overflowY = 'scroll'
			this.isShowBackground = false
		},
	},

	components: { MenuParent },
}
</script>

<style lang="scss">
.scroll-down {
	header {
		transform: translate3d(0, -100%, 0);
	}
}

header {
	transition: all 300ms ease-in-out;

	@media screen and (min-width: 50px) and (max-width: 960px) {
		&.active {
			height: 100vh;
			transition: all 300ms ease-in-out;
			overflow-y: scroll;
		}
	}

	.show-bg {
		@apply block w-full absolute h-screen top-full left-0 overflow-hidden;
		transition: all ease 0.2s;
		background: rgba(5, 20, 31, 0.8);
	}

	.header-top-inner {
		.hamburger {
			&.active {
				.hamburger-stick {
					&:nth-child(1) {
						@apply top-[48%];
						transform: translate(-53%, 0) rotate(135deg);
					}

					&:nth-child(2) {
						@apply top-[48%];
						transform: translate(-53%, 0) rotate(-135deg);
					}
				}
			}
		}
	}

	.menu-desktop {
		&-list {
			.desktop-menu-item {
				.desktop-item-link {
					@apply relative;
					@media screen and (min-width: 960px) {
						&::after {
							content: '';
							@apply absolute scale-x-0 block w-full h-[2px] bottom-[-23px] left-0 bg-dark;
							transition: all ease 0.3s;
						}

						&:hover {
							&::after {
								@apply scale-x-100;
							}
						}
					}
				}

				.submenu {
					@apply border-t-[1px] border-t-gray  bg-lgray absolute z-10 w-screen left-0 top-full;
					transition: all ease 0.3s;
					@media screen and (min-width: 50px) and (max-width: 960px) {
						display: block;
						left: -160%;
						top: 0;
						background-color: #fff;
						border-top: none;
						overflow-y: auto;
						height: 100%;

						.submenu-title {
							p {
								display: block;
								text-align: center;
								@media (min-width: 50px) {
									background: url('~static/images/svg/arrow-left.svg')
										no-repeat left 30px center;
								}
								@media (min-width: 540px) {
									background: url('~static/images/svg/arrow-left.svg')
										no-repeat left 55px center;
								}
								@media (min-width: 720px) and (max-width: 960px) {
									background: url('~static/images/svg/arrow-left.svg')
										no-repeat left 80px center;
								}
							}
						}

						ul {
							li {
								border: none;
							}
						}
						&.active {
							left: 0;
						}
					}

					&.active {
						@apply block;
					}

					a {
						@media screen and (min-width: 960px) {
							@apply relative;
							&::after {
								content: '';
								@apply absolute scale-x-0 block w-full h-[2px] bottom-[-5px] left-0 bg-dark;
								transition: all ease 0.3s;
							}
							&:hover {
								&::after {
									@apply scale-x-100;
								}
							}
						}
					}
				}
			}
		}
	}

	.header-bottom {
		@media screen and (min-width: 50px) and (max-width: 960px) {
			.menu-mobile {
				@apply absolute left-[-100%] top-0 bg-white w-full;
				transition: all ease 0.3s;
				z-index: 2;
				//overflow-y: scroll;

				.menu-mobile-inner {
					@apply justify-start mb-[50px] flex-col bg-white;
					.menu-mobile-list {
						@apply flex-col w-full;
						align-items: initial;

						li {
							@apply m-0 border-b-[1px] border-y-gray;
							.desktop-item-link {
								@apply relative text-lg font-bold block;

								&.has-submenu {
									background: url('~static/images/svg/arrow-right.svg')
										no-repeat right 30px center;
								}
							}
						}
					}
				}

				&.active {
					@apply left-[0];
				}
			}
		}
	}
}

.header {
	a {
		@apply text-white;
	}

	&-model-menu-main {
		li {
			margin-right: 20px;

			a {
				position: relative;

				&::before {
					content: '';
					background: white;
					position: absolute;
					width: 100%;
					height: 1px;
					top: calc(100% + 5px);
					left: 0;
					transform: scaleX(0);
					transform-origin: left;
					transition: 0.3s all ease;
				}

				&:hover {
					&::before {
						transform: scaleX(1);
					}
				}
			}

			&:last-child {
				margin-right: 0;
			}
		}
	}
}
</style>
